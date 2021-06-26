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
                                <h3 class="m-0">Edit Projects</h3>
                            </div>
                        </div>
                    </div>
                    <div class="white_card_body">
                        
                    <label for="hname">Project title</label>
                        <div class="form-group mb-4">
                            <input type="text" id="hname" class="form-control" name="inputText" id="inputText"
                                placeholder="Project title">
</div>
<div class="form-group mb-4">
<div class="form-group mb-0">
<label for="iname">Image</label>
                            <input type="file" id="iname" class="form-control-file" id="exampleFormControlFile1">
                        </div>
</div>
<div class="form-group mb-4">
<label for="jname">Image alt text</label>
                            <input type="text" id="jname" class="form-control" name="inputText" id="inputText"
                                placeholder="Alternative text for image">
</div>
<div class="form-group mb-4">
<label for="kname">Description</label>
                            <textarea type="text"  id="kname" class="form-control" name="inputText" id="inputText"
                                placeholder="Project description"></textarea>
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