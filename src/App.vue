<template>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>Sciences-U Data Company</title>

  <!-- Bootstrap core CSS -->
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <!-- Custom styles for this template -->
  <link href="assets/css/shop-item.css" rel="stylesheet">

</head>
  <div id="app">

  <!-- Navbar -->
    <NavBar />

    <!-- contenu principal -->
    <router-view/>

    <!-- Footer -->
    <Footer />
  </div>

  </html>
</template>

<script>
import NavBar from './components/NavBar'
import Footer from './components/Footer'

export default {
  name: 'App',
  props: {},
  components:{
      NavBar,
      Footer
  }
}

</script>