<script lang="ts">
    import type { Profile } from "$lib/types/Posts";

    export let profile: Profile;

</script>

<div class="profile-card">
    <img class="avatar" src={profile.avatar_url} alt="Avatar"/>
    <div class="info">
        <h2>{profile.username}</h2>
    </div>
</div>

<style lang="scss">
  .profile-card {
    width: 100%;
    height: 100%;
    padding: 10px;
    background-color: #c0c0c0;
    border: 2px solid #000;
    box-shadow: 2px 2px 0 #fff, 4px 4px 0 #000;
    font-family: 'MS Sans Serif', Geneva, sans-serif;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    .avatar {
      //width: 100px;
      //height: 100px;
      //border: 1px solid #000;
      margin-bottom: 10px;
    }

    .info {
      text-align: center;

      h2 {
        margin: 0;
        font-size: 16px;
        font-weight: bold;
      }

      p {
        margin: 5px 0;
        font-size: 12px;
      }
    }
  }
</style>
