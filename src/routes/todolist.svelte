<script>
  import { onMount,onDestroy,beforeUpdate,afterUpdate } from 'svelte'
import { text } from 'svelte/internal';
import Listitem from '../components/listItem.svelte'
let list = []
let inputValue = ''


//很像react中的useEffect 当后面的依赖项变了就会执行
$: console.log(`inputValue发生改变:${inputValue}`)

onMount(() => {
  list = ['svelte', 'vite', 'react']
  console.log('...')
})
afterUpdate(() => {
  // console.log('更新后埔')
})
const addItem = (inputValue) => {
 list = [...list, inputValue]
 //添加后 清空输入框  ==TODO==
 inputValue = ''
 console.log(inputValue)
}
const byKeyAdd = (e,inputValue) => {
  if(e.keyCode === 13){
    addItem(inputValue)
  }
}
const handleDel = (idx) => {
  //方式一
  list.splice(idx,1)
  list = list

  //方式二
  // list = [...list.slice(0,idx), ...list.slice(idx+1)]
}
</script>


  <section class="p-1 ">
      <div class="w-800px m-auto bg-blue-100 p-6">
        <div class="bg-white flex  rounded-12px outline-none border-0 px-6 py-1">
          <input 
          on:keydown={(e) => byKeyAdd(e, inputValue)}
          bind:value={inputValue}
          type="text" 
          class="h-36px w-full rounded-12px outline-none border-0 ">

          <button 
          on:click={()=>addItem(inputValue)}
          class="text-pink-500 w-36px outline-none transform transition duration-200 ease-in-out hover:scale-120 ">添加</button>
        </div>
        <div class="p-6">
            {#each list as val,idx (idx)}
              <Listitem obj={{val,idx,handleDel}}/>
            {:else}
              <div>暂无数据...</div>
            {/each}
        </div>
      </div>
  </section>

<style>

</style>
