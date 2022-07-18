<template>
  <div class="container text-center mt-2 shadow border-top border-gray">
    <div class="row g-0 border-bottom border-gray">
     <div class="col-12 text-center p-2 bg-light">
        <h1>{{ name }}</h1>
     </div>
    </div>
    <div class="row g-0">
      <div class="col-12 p-2">
        <div class="row row-cols-1 row-cols-md-4 g-4 m-2">
            <div v-for="(product, index) in products" :key="index" class="p-2">
                <div class="card h-100">

                        <img :src="product.thumbnail" class="card-img-top" :alt="product.title" style="height:130px">

                    <div class="card-body g-0">
                        <h6 class="card-title p-2 text-danger">
                            {{ product.title.substring(0, 35) }}
                        </h6>
                    </div>
                    <div class="card-footer text-center fs-5 p-1">
                        <span class="text-primary float-start ms-2 pt-1"> ${{ product.price.toFixed(2) }}</span>
                        <button class="btn btn-outline-danger btn-sm float-right shadow-none" v-on:click="addToCart(product.id)">
                            Add to Cart<i class="fas fa-shopping-cart"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  data(){
    return{
      name: 'Nuxt App',
    }
  },

  mounted() {
        this.$store.dispatch("fetchProducts");
  },

  computed:{
    products(){
      return this.$store.getters.getProducts
    }
  },

}
</script>
