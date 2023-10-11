<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
              <h2 class="pt-4">Founder's Products</h2>
              
              <!-- Display Founder's Information -->
              <div class="founder-info">
                <!-- <img :src="founder.avatar" alt="Founder Avatar" /> -->
                <h3>{{ founder.name }}</h3>
                <p>{{ founder.bio }}</p>
              </div>

              <!-- List of Products -->
              <div v-if="products.length > 0">
                <h4>Products</h4>
                <ul>
                  <li v-for="product in products" :key="product.id">
                    <div class="product-card">
                      <!-- <img :src="product.image" alt="Product Image" /> -->
                      <h5>{{ product.name }}</h5>
                      <p>{{ product.description }}</p>
                      <a :href="product.website" target="_blank">Visit Website</a>
                    </div>
                  </li>
                </ul>
              </div>
              
              <!-- Message if no products are found -->
              <div v-else>
                <p>No products available for this founder.</p>
              </div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
  data() {
    return {
      founder: {
        name: 'John Doe',
        avatar: '/path-to-avatar.jpg',
        bio: 'A passionate entrepreneur with a focus on innovative products.',
      },
      products: [
        {
          id: 1,
          name: 'Product 1',
          image: '/product1.jpg',
          description: 'Description of Product 1.',
          website: 'https://www.product1.com',
        },
        {
          id: 2,
          name: 'Product 2',
          image: '/product2.jpg',
          description: 'Description of Product 2.',
          website: 'https://www.product2.com',
        },
        // Add more products here
      ],
    };
  },
  methods: {
    products() {},
  },
};
</script>


<style scoped>
/* Add CSS styles for your components here */
.founder-info {
  text-align: center;
  margin-bottom: 20px;
}

.founder-info img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.product-card {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
}

.product-card img {
  width: 100%;
  max-height: 150px;
}

.product-card h5 {
  margin-top: 10px;
  font-size: 18px;
}

.product-card p {
  margin-top: 10px;
}

.product-card a {
  display: block;
  margin-top: 10px;
  color: #007bff;
}
</style>