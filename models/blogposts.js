const BlogPosts = (sequelize, DataTypes) => {
  const blogPost = sequelize.define('BlogPosts', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    published: {
      type: DataTypes.DATE,  
    },
    updated: {
      type: DataTypes.DATE,
    },
  },
  {
    timestamps: false,
  });

  return blogPost;
};

module.exports = BlogPosts;