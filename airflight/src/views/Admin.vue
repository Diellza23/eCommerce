<template>
  <div class="admin">
    <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
      <a
        id="show-sidebar"
        @click="closeMenu"
        class="btn btn-sm btn-dark"
        href="#"
      >
        <i class="fas fa-bars"></i>
      </a>
      <nav id="sidebar" class="sidebar-wrapper">
        <div class="sidebar-content">
          <!-- sidebar-brand  -->
          <div class="sidebar-item sidebar-brand">
            <a href="#">Vue Shop</a>
            <div id="close-sidebar" @click="closeMenu">
              <i class="fas fa-times"></i>
            </div>
          </div>
          <!-- sidebar-header  -->
          <div class="sidebar-item sidebar-header">
            <div class="user-pic">
              <img
                class="img-responsive img-rounded"
                src="/img/administrator.png"
                alt="User picture"
              />
            </div>
            <div class="user-info">
              <span class="user-role"> {{ email }} </span>
              <strong>Administrator</strong>
              <span class="user-status">
                <i class="fa fa-circle"></i>
                <span>Online</span>
              </span>
            </div>
          </div>
          <!-- sidebar-search  -->
          <div class="sidebar-item sidebar-search">
            <div>
              <div class="input-group">
                <input
                  type="text"
                  class="form-control search-menu"
                  placeholder="Search..."
                />
                <div class="input-group-append">
                  <span class="input-group-text">
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <!-- sidebar-menu  -->
          <div class="sidebar-item sidebar-menu">
            <ul>
              <li class="header-menu">
                <span>Menu</span>
              </li>

              <li>
                <router-link to="/admin/profile">
                  <i class="fa fa-user"></i>
                  <span>Profile</span>
                </router-link>
              </li>
              <li>
                <router-link to="/admin/products">
                  <i class="fab fa-amazon"></i>
                  <span>Products</span>
                </router-link>
              </li>
              <li>
                <router-link to="/admin/list">
                  <i class="fa fa-shopping-cart"></i>
                  <span>Offers List</span>
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Create' }">
                  <i class="fa fa-user"></i>
                  <span>Create Offers</span>
                </router-link>
              </li>
              <li>
                <router-link to="/admin/contactsList">
                  <i class="fab fa-amazon"></i>
                  <span>Contact List</span>
                </router-link>
              </li>
              <li>
                <router-link to="/admin/usersList">
                  <i class="fab fa-amazon"></i>
                  <span>Users List</span>
                </router-link>
              </li>
              <li>
                <a href="#" @click="logout()">
                  <i class="fa fa-power-off"></i>
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main class="page-content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import $ from "jquery";

export default {
  name: "admin",
  data() {
    return {
      name: null,
      email: null,
    };
  },
  components: {},
  methods: {
    closeMenu() {
      $(".page-wrapper").toggleClass("toggled");
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("/");
        })
        .catch((err) => {
          alert(err.message);
        });
    },
  },
  created() {
    var user = firebase.auth().currentUser;
    this.email = user.email;
  },
};
</script>
