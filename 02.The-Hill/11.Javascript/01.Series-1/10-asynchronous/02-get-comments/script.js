// 10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires


(() => {
    // your code here
    document.getElementById('run').addEventListener('click', displayComments);

    function displayComments() {
        window.lib.getPosts((error, articles) => {
            articles.forEach(article => {
                window.lib.getComments(article.id, (error, comments) => {
                    article.comments = comments;
                    console.log(article);
                });
            })
        });
    }
})();
