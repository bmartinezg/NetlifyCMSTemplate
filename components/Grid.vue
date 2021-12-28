<template>
  <section class="container grid">
    <h2 class="title is-2 grid__title">Esto es un titulo h2</h2>
    <div class="columns">
      <div class="column grid__element">
        <img class="grid__image" src="https://picsum.photos/100/100" alt="" />
        <div>
          <h3 class="title is-4">Lorem Ipsum</h3>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
        </div>
      </div>
      <div class="column grid__element">
        <img class="grid__image" src="https://picsum.photos/100/100" alt="" />
        <div>
          <h3 class="title is-4">Lorem Ipsum</h3>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column grid__element">
        <img class="grid__image" src="https://picsum.photos/100/100" alt="" />
        <div>
          <h3 class="title is-4">Lorem Ipsum</h3>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
        </div>
      </div>
      <div class="column grid__element">
        <img class="grid__image" src="https://picsum.photos/100/100" alt="" />
        <div>
          <h3 class="title is-4">Lorem Ipsum</h3>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.columns {
  gap: $size-3;
  margin-bottom: $size-3 !important;
}

.grid {
  padding: $size-3 0;
  &__title {
    text-align: center;
    margin-bottom: $size-3 !important;
  }

  &__image {
    height: fit-content;
    object-fit: cover;
    border-radius: 50%;
    margin-right: $size-3;
  }

  &__element {
    display: flex;
  }
}
</style>
