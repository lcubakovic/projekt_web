<template>
  <div class="settings-page">
    <h3 class="h3">Settings Page</h3>
    <form class="row g-3">
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">First Name</label>
        <input type="text" class="form-control" id="inputEmail4" />
      </div>
      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">Last Name</label>
        <input type="text" class="form-control" id="inputPassword4" />
      </div>
      <div class="col-12">
        <label for="inputAddress" class="form-label">Address</label>
        <input
          type="text"
          class="form-control"
          id="inputAddress"
          placeholder="1234 Main St"
        />
      </div>
      <div class="col-12">
        <label for="inputAddress2" class="form-label">Address 2</label>
        <input
          type="text"
          class="form-control"
          id="inputAddress2"
          placeholder="Apartment, studio, or floor"
        />
      </div>
      <div class="col-md-6">
        <label for="inputCity" class="form-label">City</label>
        <input type="text" class="form-control" id="inputCity" />
      </div>
      <div class="col-md-4">
        <label for="inputState" class="form-label">State</label>
        <select id="inputState" class="form-select">
          <option selected>Choose...</option>
          <option>...</option>
        </select>
      </div>
      <div class="col-md-2">
        <label for="inputZip" class="form-label">Zip</label>
        <input type="text" class="form-control" id="inputZip" />
      </div>
      <div class="col-12">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck" />
          <label class="form-check-label" for="gridCheck"> Check me out </label>
        </div>
      </div>
      <div class="col-12">
        <button class="btn" type="submit">Sign in</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "settingsPageView",
};
</script>

<style>
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.settings-page {
  padding: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}


.h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}

.btn {
  cursor: pointer;
  background-color: #2aeb74;
  font-size: 1.125rem;
  color: #030e1b;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  margin-top: 2rem;
}

.btn:hover {
  color: #ddd;
  background: #000;
}

.form-label {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  text-align: center;
  font-family: sans-serif;
}

</style>
