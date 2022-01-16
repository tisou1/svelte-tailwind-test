<script>
import { globals } from "svelte/internal";

</script>
<main class="container mx-auto text-base">
  <nav class="text-center text-orange-300 bg-bg1 my-6 py-4">
    <a href="." class="text-red-300 hover:text-red-500 p-3 bg-indigo-200 rounded-18px ">Home</a>
    <!-- <a href="about">About</a> -->
    <a href="todolist" class="text-red-300 hover:text-red-500 p-3 bg-indigo-200 rounded-18px">TODOLIST</a>
  </nav>
  
  <slot></slot>
</main>

<style global windi:preflights:global windi:safelist:global>
     /* html{
      font-size: 62.5%;
    } */
</style>
