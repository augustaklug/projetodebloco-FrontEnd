<template>
  <div class="footer-basic">
    <footer>
      <div class="social">
        <a href="http://www.instagram.com" target="_blank">
          <i class="fab fa-instagram"></i>
          <div class="noshow">Instagram</div>
        </a>
        <a href="http://www.facebook.com" target="_blank">
          <i class="fab fa-facebook-square"></i>
          <div class="noshow">Facebook</div>
        </a>
        <a href="http://www.linkedin.com" target="_blank">
          <i class="fab fa-linkedin-in" aria-label=""></i>
          <div class="noshow">Linkedin</div>
        </a>
      </div>
      <ul class="list-inline">
        <li class="list-inline-item">
          <router-link to="/">Home</router-link>
        </li>

        <li class="list-inline-item">
          <a href="#">Sobre</a>
        </li>
        <li class="list-inline-item">
          <a href="#">Contato</a>
        </li>
        <li class="list-inline-item">
          <a href="#">Política de Privacidade</a>
        </li>
      </ul>
      <p class="copyright">SGE © 2020</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "myFooter"
};
</script>

<style scoped>
.noshow {
  display: none;
}

.footer-basic {
  padding: 40px 0;
  color: #424242;
}

.footer-basic ul {
  padding: 0;
  list-style: none;
  text-align: center;
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 0;
}

.footer-basic li {
  padding: 0 10px;
}

.footer-basic ul a {
  color: inherit;
  text-decoration: none;
  opacity: 0.8;
}

.footer-basic ul a:hover {
  opacity: 1;
}

.footer-basic .social {
  text-align: center;
  padding-bottom: 25px;
}

.footer-basic .social > a {
  font-size: 24px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  border: 1px solid #ccc;
  margin: 0 8px;
  color: inherit;
  opacity: 0.75;
}

.footer-basic .social > a:hover {
  opacity: 0.9;
}

.footer-basic .copyright {
  margin-top: 15px;
  text-align: center;
  font-size: 13px;
  color: #424242;
  margin-bottom: 0;
}
</style>