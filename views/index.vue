<template lang="html">
    <div>
        <header>
          <nav class="navbar navbar-inverse">
             <div class="container-fluid">
               <div class="navbar-header">
                 <a class="navbar-brand" href="/">AnimeList</a>
               </div>
               <ul class="nav navbar-nav navbar-right">
                 <li><a href="#">SignIn</a></li>
                 <li><a href="#">SignOut</a></li>
              </ul>
            </div>
          </nav>
        </header>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
        }
    }
}
</script>

<style lang="css">
.navbar{background:transparent;font-weight: bold;}
  header{height:7vh; background-color: #355c70;}
  h3{color:#fff;margin:0;padding:0;}
</style>
