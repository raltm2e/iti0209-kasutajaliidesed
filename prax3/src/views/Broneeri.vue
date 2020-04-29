<template>
    <div class="container-fluid">
        <div class="row align-items-center" style="height: 100%">
            <div class="col-6 text-center d-none d-lg-block">
                <h1>Sisesta auto andmed</h1>
                <img src="https://img.icons8.com/ios/100/000000/car-badge.png" alt=""/>
            </div>
            <div class="col">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="card">
                            <article class="card-body">
                                <h6 style="visibility: hidden">html valideerimine</h6>
                                <form>
                                    <div class="form-group">
                                        <label for="automark">Automark:</label>
                                        <select id="automark" class="form-control required-data">
                                            <option disabled selected>Vali...</option>
                                            <option v-for="item in margid" :key="item.automark">{{item.automark}}</option>
                                        </select>
                                        <div class="required-broneeri"></div>
                                    </div>
                                    <div class="form-group">
                                        <label for="mudel">Mudel:</label>
                                        <select id="mudel" class="form-control required-data">
                                            <option disabled selected>Vali...</option>
                                            <option v-for="item in mudelid" :key="item.mudel">{{item.mudel}}</option>
                                        </select>
                                        <div class="required-broneeri"></div>
                                    </div>
                                    <div class="form-group">
                                        <label for="mootor">Mootor:</label>
                                        <select id="mootor" class="form-control required-data">
                                            <option disabled selected>Vali...</option>
                                            <option v-for="item in mootorid" :key="item.mootor">{{item.mootor}}</option>
                                        </select>
                                        <div class="required-broneeri"></div>
                                    </div>
                                    <div class="form-group">
                                        <label for="käigukast">Käigukast:</label>
                                        <select id="käigukast" class="form-control required-data">
                                            <option disabled selected>Vali...</option>
                                            <option v-for="item in k2igukastid" :key="item.k2igukast">{{item.k2igukast}}</option>
                                        </select>
                                        <div class="required-broneeri"></div>
                                    </div>
                                    <div class="form-row" style="width: 100%">
                                        <div class="form-group m-auto">
                                            <button class="btn btn-lg" v-on:click="validateDataHooldus">Hooldusesse</button>
                                        </div>
                                        <div class="form-group m-auto">
                                            <button class="btn btn-lg" v-on:click="validateDataRemont">Remonti</button>
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
    import margid from '../assets/json/automargid.json'
    import mudelid from '../assets/json/mudelid.json'
    import mootorid from '../assets/json/mootorid.json'
    import k2igukastid from '../assets/json/k2igukastid.json'
    import router from '../router/index.ts';

    function clearRequiredFields() {
        const required = document.getElementsByClassName("required-broneeri");
        let i = 0;
        for (i = 0; i < required.length; i++) {
            required[i].innerHTML = "";
        }
    }

    function validateDataRemont() {
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

    function validateDataHooldus() {
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

    export default {
        name: "Broneeri",
        data(){
            return {
                margid: margid,
                mudelid: mudelid,
                mootorid: mootorid,
                k2igukastid: k2igukastid
            }
        },
        methods: {
            validateDataRemont: function () {
                if (validateDataRemont()) {
                    router.push({ path: '/remont' })
                }
            },
            validateDataHooldus: function () {
                if (validateDataHooldus()) {
                    router.push({ path: '/hooldus' })
                }

            }
        }
    }
</script>

<style scoped>

</style>
