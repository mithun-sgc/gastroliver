# CI/CD Pipeline Setup Guide

## Overview
This project uses GitHub Actions to automatically build and deploy to AWS S3 whenever code is pushed to the main branch.

## Prerequisites
- An AWS S3 bucket
- AWS IAM credentials with S3 access
- GitHub repository

## Setup Instructions

### 1. Create AWS IAM User

1. Go to AWS IAM Console
2. Create a new IAM user (e.g., `github-actions-deploy`)
3. Attach the following policy to the user:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:GetObject",
        "s3:DeleteObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::test-sgc",
        "arn:aws:s3:::test-sgc/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "cloudfront:CreateInvalidation"
      ],
      "Resource": "*"
    }
  ]
}
```

4. Save the **Access Key ID** and **Secret Access Key**

### 2. Configure S3 Bucket for Static Website Hosting

1. Go to your S3 bucket in AWS Console
2. Navigate to **Properties** tab
3. Scroll down to **Static website hosting**
4. Click **Edit** and enable it
5. Set:
   - Index document: `index.html`
   - Error document: `index.html` (for single-page apps)
6. Save changes

### 3. Configure S3 Bucket Permissions

Add this bucket policy to make your website publicly accessible:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::test-sgc/*"
    }
  ]
}
```

### 4. Add GitHub Secrets

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** and add the following:

   - **AWS_ACCESS_KEY_ID**: Your IAM user's access key ID
   - **AWS_SECRET_ACCESS_KEY**: Your IAM user's secret access key
   - **AWS_REGION**: Your S3 bucket region (e.g., `us-east-1`, `ap-south-1`)
   - **S3_BUCKET_NAME**: `test-sgc` (your bucket name)
   - **CLOUDFRONT_DISTRIBUTION_ID** (Optional): Your CloudFront distribution ID if using CloudFront

### 5. Test the Pipeline

1. Commit and push your code:
   ```bash
   git add .
   git commit -m "Add CI/CD pipeline"
   git push origin main
   ```

2. Go to GitHub **Actions** tab to monitor the deployment

3. Once completed, visit your S3 website URL

## Workflow Details

The workflow (`.github/workflows/deploy.yml`) performs these steps:

1. **Checkout code**: Clones your repository
2. **Setup Node.js**: Installs Node.js 20
3. **Install dependencies**: Runs `npm ci`
4. **Build project**: Runs `npm run build` to create production build
5. **Configure AWS credentials**: Sets up AWS CLI with your credentials
6. **Deploy to S3**: Syncs the `dist/` folder to S3
7. **Invalidate CloudFront** (Optional): Clears CloudFront cache

## Important Notes

- The workflow triggers on pushes to the `main` branch
- Change the branch name in `.github/workflows/deploy.yml` if your default branch is different
- The `--delete` flag in the S3 sync command removes files from S3 that don't exist locally
- Cache-control headers are set to 1 year for optimal performance

## Troubleshooting

### Build fails
- Check if all dependencies are listed in `package.json`
- Verify the build script works locally: `npm run build`

### Deployment fails
- Verify AWS credentials in GitHub Secrets
- Check IAM user has correct permissions
- Ensure S3 bucket name is correct

### Website doesn't load
- Check S3 bucket is configured for static website hosting
- Verify bucket policy allows public read access
- Check the website URL in S3 bucket properties

## S3 Website URL Format

Your website will be available at:
- `http://YOUR-BUCKET-NAME.s3-website-REGION.amazonaws.com`
- Or `http://YOUR-BUCKET-NAME.s3-website.REGION.amazonaws.com`

Example: `http://my-site.s3-website-us-east-1.amazonaws.com`

## Optional: CloudFront Setup

For better performance and HTTPS support:

1. Create a CloudFront distribution pointing to your S3 bucket
2. Add the **CLOUDFRONT_DISTRIBUTION_ID** secret to GitHub
3. The workflow will automatically invalidate the cache on each deployment

## Cost Considerations

- S3 storage and data transfer costs apply
- CloudFront costs apply if using CDN
- GitHub Actions provides 2,000 free minutes/month for public repositories
