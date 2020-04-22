<template>
    <div>
        <div class="container-fluid">
            <div class="row text-center">
                <div class="col">
                    <h3>Hinnakiri</h3>
                </div>
            </div>
            <div class="row text-center">
                <div class="col">
                    <h5>Siit leiate hinnad meie poolt teostavate tööde kohta.</h5>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm">
                    <table class="table table-striped table-dark">
                        <thead>
                        <tr>
                            <th scope="col">Töö</th>
                            <th scope="col">Hind</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Hooldus- ja remonttööd</td>
                            <td>30 €/h</td>
                        </tr>
                        <tr>
                            <td>Elektritööd</td>
                            <td>33 €/h</td>
                        </tr>
                        <tr>
                            <td>Keevitustööd</td>
                            <td>33 €/h</td>
                        </tr>
                        <tr>
                            <td>Ekspress remonttööd (järjekorraväliselt, auto kohe töösse)</td>
                            <td>45 €/h</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Hinnakiri"
    }
</script>

<style scoped>

</style>
