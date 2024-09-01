<script lang="ts">
    // Add any necessary imports or logic here
</script>

<div class="taskbar">
    <div class="start-button">Start</div>
    <div class="task-items">
        <button>test</button>
        <!-- Task items will go here -->
    </div>
    <div class="system-tray">
        <!-- System tray icons will go here -->
    </div>
</div>

<style lang="scss">
    .taskbar {
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #c0c0c0;
        border-top: 2px solid #fff;
        border-left: 2px solid #fff;
        border-right: 2px solid #808080;
        border-bottom: 2px solid #808080;
        height: 40px;
        padding: 0 5px;
        font-family: 'dungGeunMo', serif;
        .start-button {
            background-color: #000080;
            color: #fff;
            padding: 5px 10px;
            border: 2px solid #fff;
            border-top: 2px solid #808080;
            border-left: 2px solid #808080;
            cursor: pointer;
        }
        .task-items {
            flex-grow: 1;
            display: flex;
            align-items: center;
            padding: 0 10px;
        }

        .system-tray {
            display: flex;
            align-items: center;
        }
    }

</style>
