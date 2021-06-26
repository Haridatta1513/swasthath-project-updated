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
                                <h3 class="m-0">Add projects</h3>
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
        <div class="row">
            <div class="col-lg-12">
                <div class="white_card card_height_100 mb_30">
                    <div class="white_card_header">
                        <div class="box_header m-0">
                            <div class="main-title">
                                <h3 class="m-0">Data table</h3>
                            </div>
                        </div>
                    </div>
                    <div class="white_card_body">
                        <div class="QA_section">
                            <div class="white_box_tittle list_header">
                                <h4>Table</h4>
                                <div class="box_right d-flex lms_block">
                                    <div class="serach_field_2">
                                        <div class="search_inner">
                                            <form Active="#">
                                               
                                               
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="QA_table mb_30">
                                <!-- table-responsive -->
                                <table class="table ">
                                    <thead>
                                        <tr>
                                            <th scope="col">Project Title</th>
                                            <th scope="col">Image</th>
                                            <th scope="col">Image alt text</th>
                                            <th scope="col">Project description</th> 
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row"> <a href="#" class="question_content"> title here 1</a></th>
                                            <td>Category name</td>
                                            <td>Teacher James</td>
                                            <td>Lorem ipsum</td>
                                            <td><a href="editprojects.php"><i class="fa fa-edit"></i></a> <a href="#"> <i class="fa fa-trash"></i></a></td>
                                           
                                           
                                        </tr>
                                        <tr>
                                            <th scope="row"> <a href="#" class="question_content"> title here 1</a></th>
                                            <td>Category name</td>
                                            <td>Teacher James</td>
                                            <td>Lorem ipsum</td>
                                            <td><a href="editprojects.php"><i class="fa fa-edit"></i></a> <a href="#"> <i class="fa fa-trash"></i></a></td>
                                        </tr>
                                    </tbody>
                                </table>
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