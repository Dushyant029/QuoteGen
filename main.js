const button = document.querySelector("button");
button.addEventListener("click", updateQuote);
function updateQuote(){
$.ajax({
  url: "https://api.quotable.io/random",
  dataType: 'json',
  success: function(res) {
    $(document).ready(function(){
        $("#a").text(res.content);
        $("#b").text("- "+res.author);
        $("#fb-share").attr('href','https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2FDushyant029.github.io%2Fquotegen&quote='+res.content+'%0A-%20'+res.author+'%0A%0ADushyant029.github.io%2Fquotegen%2F');
        $("#tweet").attr('href','https://twitter.com/intent/tweet?source=http%3A%2F%2FDushyant029.github.io%2Fquotegen&text='+res.content+'%0A-%20'+res.author+'%0A%0ADushyant029.github.io%2Fquotegen%2F');
    });
  }
});
}

updateQuote();
