<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/mono-icons@1.0.5/iconfont/icons.css" >
</svelte:head>
<script>
	import MediaQuery from "./MediaQuery.svelte";
</script>
<MediaQuery query="(min-width: 1281px)" let:matches>
	{#if matches}
	<div class="root default">
		
	</div>
	{/if}
</MediaQuery>

<MediaQuery query="(min-width: 481px) and (max-width: 1280px)" let:matches>
	{#if matches}
	<div class="root">
		<i class="mi mi-close"></i>
<i class="mi mi-drag"></i>
	</div>
	{/if}
</MediaQuery>

<MediaQuery query="(max-width: 480px)" let:matches>
	{#if matches}
	<div class="root mobile">
		mobile
	</div>
	{/if}
</MediaQuery>
<style>
nav{
    background-color: #f0f0f0;
    display: flex;
    justify-content: space-between;
    aling-items: center;
    padding: 0 20px;
    
}
	.nav-links{
        gap: 20px;
    }
    a{
        padding: 10px 10px;
        color: green;
        text-decoration: none;
    }
    .mi {
        color: green;
        overflow: hidden;
         padding: 10px 10px;
		font-size: 1.4rem;
	}
	
</style>

<nav class="root default">
<a href="#"> Logo </a>
<div class="nav-links">
<a href="#">Home </a>
<a href="#"> How it Works </a>
<a href="#"> Features </a>
<a href="#"> Pricing </a>
<a href="#"> Create Account </a>
</div>
 </nav>