<template>
    <div class="container-fluid">
        <div class="row align-items-center" style="height: 100%">
            <div class="col-6 text-center d-none d-lg-block">
                <h1>Hooldus</h1>
                <img src="../assets/images/oil_icon.png" class="img-fluid" alt="" width="400">
            </div>
            <div class="col">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="card">
                            <article class="card-body">
                                <h6 style="visibility: hidden">html valideerimine</h6>
                                <form>
                                    <div class="form-group">
                                        <label for="töö">Vali töö:</label>
                                        <select id="töö" class="form-control required-data">
                                            <option disabled selected>Vali...</option>
                                            <option v-for="item in hooldustood" :key="item.too">{{item.too}}</option>
                                        </select>
                                        <div class="required required-broneeri"></div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group m-auto">
                                            <div class="form-text">
                                                <p>Hind:</p>
                                                <h5 class="mt-0">200€</h5>
                                            </div>
                                        </div>
                                        <div class="form-group m-auto">
                                            <div class="form-text">
                                                <p>Ajakulu:</p>
                                                <h5>1h 30min</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class='input-group date'>
                                            <label>Vali päev:</label>
                                            <datepicker v-model="date" class="datepicker"></datepicker>
                                            <div class="required required-kellaaeg"></div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class='input-group date' style="width: 100%">
                                            <label>Vali kellaaeg:</label>
                                            <vue-timepicker id="time" v-model="yourTimeValue" :hour-range="[[9, 16]]" :minute-interval="30" input-width="100%"></vue-timepicker>
                                            <div class="required required-kellaaeg"></div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="telefoninumber">Sisesta telefoninumber:
                                            <br>
                                            <input type="tel" id="telefoninumber">
                                        </label>
                                        <div class="required"></div>
                                    </div>
                                    <div class="form-group">
                                        <label for="email">Sisesta email:
                                            <br>
                                            <input type="email" id="email">
                                        </label>
                                        <div class="required"></div>
                                    </div>
                                    <div class="form-row" style="width: 100%">
                                        <div class="form-group m-auto">
                                            <router-link to="/broneeri" class="btn btn-lg">Tagasi</router-link>
                                        </div>
                                        <div class="form-group m-auto">
                                            <button class="btn btn-lg" v-on:click="validateLogin">Kinnita</button>
                                        </div>
                                    </div> <!-- form-group// -->
                                </form>
                            </article> <!-- card-body end .// -->
                        </div> <!-- card.// -->
                    </div> <!-- col.//-->
                </div> <!-- row.//-->
            </div>
        </div>
    </div>

</template>

<script>
    import hooldustood from '../assets/json/hooldustood.json'
    import router from '../router/index.ts';
    import Datepicker from 'vuejs-datepicker';
    import VueTimepicker from 'vue2-timepicker';
    import 'vue2-timepicker/dist/VueTimepicker.css';

    function validateEmail(email) {
        // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
        const emailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|("[^\s@]+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailformat.test(String(email).toLowerCase());
    }

    function validatePhoneNumber(phoneNumber) {
        if (phoneNumber.length >= 7 && phoneNumber.length <= 8) {
            if (!isNaN(phoneNumber) && phoneNumber[0] === 5) {
                return true;
            }
        }
        return false;
    }

    function clearRequiredFields() {
        const required = document.getElementsByClassName("required");
        let i = 0;
        for (i = 0; i < required.length; i++) {
            required[i].innerHTML = "";
        }
    }

    function validateData() {
        clearRequiredFields();
        const required = document.getElementsByClassName("required-broneeri");
        const requiredData = document.getElementsByClassName("required-data");
        let i;
        let isCorrect = true;
        for (i = 0; i < requiredData.length; i++) {
            if (requiredData[i].options[requiredData[i].selectedIndex].value === "Vali...") {
                required[i].innerHTML = "Tee valik!";
                isCorrect = false;
            }
        }
        return isCorrect;
    }

    function validateLogin() {
        clearRequiredFields();
        validateData();
        const required = document.getElementsByClassName("required");
        const email = document.getElementById("email").value;
        const phoneNumber = document.getElementById("telefoninumber").value;
        const date = document.getElementsByClassName("datepicker")[0];
        const time = document.getElementById("time");
        if (date.getElementsByTagName("input")[0].value === "") {
            required[1].innerHTML = "Vali kuupäev!";
        }
        if (time.value === "") {
            required[2].innerHTML = "Vali kellaaeg!";
        }
        if (phoneNumber === "") {
            required[3].innerHTML = "Telefoninumber ei saa olla tühi!";
        } else if (!validatePhoneNumber(phoneNumber)) {
            required[3].innerHTML = "Vale telefoninumber!";
        }
        if (email === "") {
            required[4].innerHTML = "Email ei saa olla tühi!";
        } else if (!validateEmail(email)) {
            required[4].innerHTML = "Vale email!";
        }
        if (phoneNumber === "" || !validatePhoneNumber(phoneNumber) || email === "" || !validateEmail(email) || time.value === "" || date.getElementsByTagName("input")[0].value === "") {
            return false;
        }
        return true;
    }

    export default {
        name: "Hooldus",
        data() {
            return {
                hooldustood: hooldustood,
                date: null,
                yourTimeValue: {
                    HH: "09",
                    mm: "00"
                }
            }
        },
        methods: {
            validateLogin: function () {
                if (validateLogin()) {
                    router.push({ path: '/edukas' })
                }
            }
        },
        components: {
            Datepicker,
            VueTimepicker
        }
    }
</script>

<style scoped>

</style>
