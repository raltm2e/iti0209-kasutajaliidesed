<template>
    <div class="container-fluid">
        <div class="row align-items-center" style="height: 100%">
            <div class="col-6 text-center d-none d-lg-block">
                <h1>Hooldus</h1>
                <img src="images/oil_icon.png" class="img-fluid" alt="" width="400">
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
                                            <option>Õlivahetus</option>
                                            <option>Inspektsioon I</option>
                                            <option>Inspektsioon II</option>
                                            <option>Muu</option>
                                        </select>
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
                                        <div class='input-group date' id='datetimepicker1'>
                                            <label for="aeg">Vali aeg:
                                                <input id="aeg" type="datetime-local" class="form-control" />
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
                                    </div>
                                    <div class="form-group">
                                        <label for="email">Sisesta email:
                                            <br>
                                            <input type="email" id="email">
                                        </label>
                                    </div>
                                    <div class="form-row" style="width: 100%">
                                        <div class="form-group m-auto">
                                            <a href="broneeri.html" class="btn btn-lg">Tagasi</a>
                                        </div>
                                        <div class="form-group m-auto">
                                            <a href="edukas.html" class="btn btn-lg">Kinnita</a>
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
    export default {
        name: "Hooldus"
    }
</script>

<style scoped>

</style>
