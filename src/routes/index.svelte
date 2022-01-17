<script>
 let section
  const changeMode = ()=>{
    section.classList.toggle('dark')
    // document.documentElement.classList.toggle('dark')
  }
</script>




  <section bind:this={section} class="container dark  mx-auto">

 
    
   <div class="dark:bg-blue-400">asdasd
    <div class="dark:text-red-600">assssadasd</div>
   </div>
   <h1 class="text-red-200  red11">Welcome to SvelteKit</h1>
    <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
    <button on:click={changeMode}>切换主题模式</button>
  </section>
  
<style>
</style>