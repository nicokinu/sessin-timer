<script>
  import Router from 'svelte-spa-router'
  import Home from './pages/Home.svelte';
  import Sessin from './pages/Sessin.svelte';
  import Special from './pages/Special.svelte';
  import About from './pages/About.svelte';

  const routes = {
      '/': Home,
      '/sessin': Sessin,
      '/special': Special,
      '/about': About,
  }
</script>

<Router {routes}/>

