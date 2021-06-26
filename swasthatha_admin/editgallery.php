<?php
include "includes/header.php";
?>
<div class="main_content_iner ">
    <div class="container-fluid p-0 sm_padding_15px">
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <div class="white_card card_height_100 mb_30">
                    <div class="white_card_header">
                        <div class="box_header m-0">
                            <div class="main-title">
                                <h3 class="m-0">Edit Gallery
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div class="white_card_body">

                        
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <button class="btn btn-light" type="button">Button</button>
                            </div>
                            <select class="custom-select" id="inputGroupSelect03"
                                aria-label="Example select with button addon">
                                <option selected="">Choose...</option>
                                <option value="1">Image Gallery
                                </option>
                                <option value="2">Video Gallery</option>
                            </select>
                        </div>
<div class="form-group mb-4">
<div class="form-group mb-0">
                            <input type="file" class="form-control-file" id="exampleFormControlFile1">
                        </div>
</div>
<div class="form-group mb-4">
                            <input type="text" class="form-control" name="inputText" id="inputText"
                                placeholder="Alternative text for image">
</div>
<div class="form-group mb-4">
                            <input type="url" class="form-control" name="inputUrl" id="inputUrl"
                                placeholder="https://youtube.com/">
                        </div>
<div class="form-group mb-4 text-center">
<button class="btn btn-light btncol" type="button">submit</button>
</div>
  

                       
                       

                    </div>
                </div>
            </div>
        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<?php
include "includes/footer.php";
?>