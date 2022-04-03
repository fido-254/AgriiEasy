var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/fido-254/AgriEasy.git', // Update to point to your repository  
        user: {
            name: 'Steven', // update to use your name
            email: 'osteve964@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)