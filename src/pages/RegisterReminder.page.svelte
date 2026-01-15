<script lang="ts">
  import { onMount } from "svelte";
  import getPicture from "../core/getPicture";
  import type { Photo } from "@capacitor/camera";
  
  let picture: Photo | undefined = $state();
  
  onMount(async () => {
    const pic = await getPicture();
    console.log("pic", pic)
    picture = pic;
  });
  
</script>
 
{#if picture}
  <img src={picture.dataUrl} />
{/if}