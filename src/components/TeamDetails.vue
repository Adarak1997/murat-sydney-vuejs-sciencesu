<template>
<!-- Page Content -->
  <div class="container">

    <div class="row">

 

      <div class="col">
        <div class="card mt-4">
          <div class="card-body">
            <h3 class="card-title">Oh la belle équipe de {{MyTeam.title}} </h3>
            <h5 class="card-title">Composée de {{MyTeam.recipients.length}} membres</h5>

                <div class="media mb-2" v-for='(OneMember,idx) in MyTeam.recipients' :key='idx'>
                  <img class="mr-3 rounded" style='height:120px' :src="OneMember.avatar" alt="Generic placeholder image">
                  <div class="media-body">
                    <h5 class="mt-0">{{OneMember.firstName}} {{OneMember.lastName}}</h5>
                    <span class="badge badge-info">{{OneMember.email}}</span>
                  </div>
                </div>

          </div>
        </div>

      </div>
      

    </div>

  </div>
  <!-- /.container -->
</template>

<script>

import {recipientsGroup} from '@/assets/js/recipientsGroup'

export default {
  name: 'CoffeeProductDetails',
  data:()=>({
    ListGroups:recipientsGroup,
    currentTeam:null,
    MyTeam:null
}),
created(){
    const teamId = this.$route.params.teamId
    this.currentTeam = teamId
    console.log(teamId)
    this.MyTeam = this.ListGroups.find((item) => item.id == teamId)
    
}
}
</script>