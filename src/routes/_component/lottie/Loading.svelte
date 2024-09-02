<script lang="ts">
    import {onMount} from 'svelte';
    import lottie from 'lottie-web';

    let animationContainer: HTMLDivElement;

    onMount(() => {
        const animation = lottie.loadAnimation({
            container: animationContainer, // 애니메이션을 렌더링할 컨테이너 (div)
            renderer: 'svg',               // 렌더러 유형 (svg, canvas, html)
            loop: true,                    // 애니메이션 반복 여부
            autoplay: true,                // 자동 재생 여부
            path: '/animation/loading.json' // Lottie 애니메이션 JSON 파일 경로
        });

        return () => {
            animation.destroy(); // 컴포넌트 언마운트 시 애니메이션 정리
        };
    });
</script>

<style>
    .animation-container {
        width: 100%;
        height: 100%;
    }
</style>

<div bind:this={animationContainer} class="animation-container"></div>
