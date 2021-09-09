<template>
<!-- Page Content -->
  <div class="container">

    <div class="row">

      <!-- /.col-lg-3 -->

      <div class="col">

        <div class="card mt-4">
          <div class="card-body">
            <h3 class="card-title">Nos équipes ! </h3>
            <div class="card" >
              <ul class="list-group list-group-flush text-center" v-for='groups in ListGroups' :key='groups.id' >

                    <li class="list-group-item" > {{groups.title}}  {{groups.icon}}
                        <button @click='openTeamDetails(groups.id)'>Voir</button>
                    </li>            
              </ul>
            </div>
          </div>
        </div>
        <!-- /.card -->


        <!-- /.card -->

      </div>
      <!-- /.col-lg-9 -->

    </div>

  </div>
  <!-- /.container -->
</template>

<script>

import {recipientsGroup} from '@/assets/js/recipientsGroup'

export default {
    name: 'Teams',
  data:()=>({
    ListGroups:recipientsGroup
}),
methods:{
    openTeamDetails(teamId){
        this.$router.push({name:'TeamDetails', params:{teamId}});
    }
}
}

</script>