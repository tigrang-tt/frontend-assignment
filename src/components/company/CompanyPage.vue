<template>
<div>
  <div class="flex">
    <div class="col">
      <div class="icon-large round-bordered shadow"></div>
    </div>
    <div class="col">
      <h1>{{ companyName }}</h1>
      <h4>{{ companyAddress }}</h4>
    </div>
  </div>
  <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia</p>
  <div class="flex">
    <div class="col-6">
      <div class="card">
        <div class="card-title">Activities</div>
        <div class="card-list dashed">
          <div v-for="index in 8" :key="index" class="card-list-item"></div>
        </div>
      </div>
    </div>
    <div class="col-6">
      <div class="card row">
        <div class="card-title">Similar Companies</div>
        <div class="card-list">
          <div v-for="index in 2" :key="index" class="card-list-item"></div>
        </div>
      </div>
      <div class="card row">
        <div class="card-title">Company Spend History</div>
        <div class="card-content">
          <div class="chart"></div>
        </div>
      </div>
      <div class="card row">
        <div class="card-title">Company Spend History</div>
        <div class="card-list">
          <div v-for="index in 2" :key="index" class="card-list-item"></div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data: function () {
    return {
      companyName: 'Microsoft',
      companyAddress: 'Redmond, WA USA'
    };
  }
};
</script>
