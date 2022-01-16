<script>
 export let obj = {}
 console.log(obj)
</script>

<div class="flex justify-between items-center  px-3 py-2 mb-3 rounded-12px text-rose-500 bg-violet-200">
 <span> {obj.val}</span>
 <span 
 on:click={()=>obj.handleDel(obj.idx)}
 class="hover:text-fuchsia-600 hover:bg-cyan-200 rounded-8px p-2 hover:px-6 transform duration-500 origin-right">删除</span>
</div>


<style>

</style>