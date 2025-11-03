import { Calendar, ArrowRight, BookOpen } from 'lucide-react';

const Blog = () => {
  const articles = [
    {
      title: 'Understanding Childhood Constipation: Causes and Solutions',
      excerpt:
        'Learn about the common causes of constipation in children and gentle, effective approaches to help your child feel comfortable again.',
      date: '2025-10-15',
      category: 'Digestive Health',
      image: 'bg-gradient-to-br from-green-100 to-green-200',
      readTime: '5 min read',
    },
    {
      title: 'Nutrition Tips for Children with Food Allergies',
      excerpt:
        'Practical advice for parents on creating balanced, nutritious meals when managing food allergies and sensitivities in children.',
      date: '2025-10-08',
      category: 'Nutrition',
      image: 'bg-gradient-to-br from-pink-100 to-pink-200',
      readTime: '7 min read',
    },
    {
      title: 'When to See a Pediatric Gastroenterologist',
      excerpt:
        'Discover the signs and symptoms that indicate your child may benefit from specialized digestive health care.',
      date: '2025-10-01',
      category: 'Health Advice',
      image: 'bg-gradient-to-br from-green-100 to-green-200',
      readTime: '4 min read',
    },
    // {
    //   title: 'Supporting Your Child Through an Endoscopy Procedure',
    //   excerpt:
    //     'A parent\'s guide to preparing your child for an endoscopy, what to expect, and how to provide comfort and reassurance.',
    //   date: '2025-09-24',
    //   category: 'Procedures',
    //   image: 'bg-gradient-to-br from-pink-100 to-pink-200',
    //   readTime: '6 min read',
    // },
    // {
    //   title: 'Healthy Gut, Happy Child: Building Good Digestive Habits',
    //   excerpt:
    //     'Simple daily practices and lifestyle habits that promote healthy digestion and overall wellness in children.',
    //   date: '2025-09-17',
    //   category: 'Wellness',
    //   image: 'bg-gradient-to-br from-green-100 to-green-200',
    //   readTime: '5 min read',
    // },
    // {
    //   title: 'Understanding Pediatric Liver Health',
    //   excerpt:
    //     'Essential information about liver function, common pediatric liver conditions, and how to maintain liver health in children.',
    //   date: '2025-09-10',
    //   category: 'Liver Health',
    //   image: 'bg-gradient-to-br from-pink-100 to-pink-200',
    //   readTime: '8 min read',
    // },
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold mb-4">
            Our Blog
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Health Tips &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-pink-600">
              Expert Advice
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with articles about children's digestive health,
            nutrition, and wellness from our experienced pediatric
            gastroenterologist
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div
                className={`h-48 ${article.image} flex items-center justify-center`}
              >
                <BookOpen className="w-16 h-16 text-white opacity-50 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-500">
                    {article.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {new Date(article.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                  <button className="text-green-600 font-semibold hover:text-green-700 transition-colors flex items-center space-x-1 group">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* <div className="mt-12 text-center">
          <button className="px-8 py-4 bg-white text-green-600 border-2 border-green-500 rounded-full font-semibold hover:bg-green-50 transition-all duration-300 shadow-md hover:shadow-lg">
            View All Articles
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Blog;
