/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        // Add support for loading MP4 files
        config.module.rules.push({
          test: /\.mp4$/,
          use: {
            loader: 'file-loader',
            options: {
              publicPath: '/_next',
              outputPath: 'static/videos/', // Adjust the output path as needed
              name: '[name].[ext]',
            },
          },
        });
    
        return config;
      },
};

export default nextConfig;
