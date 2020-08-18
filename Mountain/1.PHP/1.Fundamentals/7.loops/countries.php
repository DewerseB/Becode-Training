<form method="GET">
    <label for="countries">Choose a country</label>
    <select name="countryISO" id="countries">
        <?php
            $countries = ['AU' => 'Australia', 'BE' => 'Belgium', 'CA' => 'Canada', 'DK' => 'Denmark', 'EG' => 'Egypt', 'FR' => 'France', 'GR' => 'Greece', 'HU' => 'Hungary', 'IN' => 'India', 'JP' => 'Japan'];
            foreach ($countries as $iso => $country) {
                echo "<option value='$iso'>$country</option>";
            }
        ?>
    </select>
    <input type="submit" value="Check ISO">
    <?php
        if (isset($_GET['countryISO'])) {
            $iso = $_GET['countryISO'];
            echo "<span>$iso</span>";
        }
    ?>
</form>