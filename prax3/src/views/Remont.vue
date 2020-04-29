<template>
    <div class="container-fluid">
        <div class="row align-items-center" style="height: 100%">
            <div class="col-6 text-center d-none d-lg-block">
                <h1>Remont</h1>
                <img src="../assets/images/engine.png" class="img-fluid" alt="" width="400">
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
                                        <select id="töö" class="form-control">
                                            <option disabled selected>Vali...</option>
                                            <option v-for="item in remonditood" :key="item.too">{{item.too}}</option>
                                        </select>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group m-auto">
                                            <div class="form-text">
                                                <p>Hind:</p>
                                                <h5 class="mt-0">300€</h5>
                                            </div>
                                        </div>
                                        <div class="form-group m-auto">
                                            <div class="form-text">
                                                <p>Ajakulu:</p>
                                                <h5>3h 30min</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class='input-group date' id='datetimepicker1'>
                                            <label for="aeg">Vali aeg:
                                                <input id="aeg" type="datetime-local" class="form-control"/>
                                            </label>
                                            <span class="input-group-addon">
                                            <span class="glyphicon glyphicon-calendar"></span>
                                        </span>
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
    import remonditood from '../assets/json/remonditood.json'
    import router from '../router/index.ts';

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

    function validateLogin() {
        clearRequiredFields();
        const required = document.getElementsByClassName("required");
        const email = document.getElementById("email").value;
        const phoneNumber = document.getElementById("telefoninumber").value;
        if (phoneNumber === "") {
            required[0].innerHTML = "Telefoninumber ei saa olla tühi!";
        } else if (!validatePhoneNumber(phoneNumber)) {
            required[0].innerHTML = "Vale telefoninumber!";
        }
        if (email === "") {
            required[1].innerHTML = "Email ei saa olla tühi!";
        } else if (!validateEmail(email)) {
            required[1].innerHTML = "Vale email!";
        }
        if (phoneNumber === "" || !validatePhoneNumber(phoneNumber) || email === "" || !validateEmail(email)) {
            console.log("False");
            return false;
        }
        console.log("True");
        return true;
    }

    export default {
        name: "Remont",
        data(){
            return {
                remonditood: remonditood
            }
        },
        methods: {
            validateLogin: function () {
                if (validateLogin()) {
                    router.push({ path: '/edukas' })
                }
            }
        }
    }
</script>

<style scoped>

</style>
