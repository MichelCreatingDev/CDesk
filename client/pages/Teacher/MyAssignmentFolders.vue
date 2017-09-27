
<template>
    <div>
        <header class="main-header navbar navbar-inverse">
            <a class="main-logo" href="/">
                College<span class="text-blue">desk</span>
            </a>
            <div class="main-header__content">
                <h1 class="main-header__caption">Assignment Grading & Feedback Platform</h1>

                <div class="dropdown main-header__name">
                    <a data-target="settings" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                        <span>Teacher name</span>
                        <span class="caret"></span>
                    </a>

                    <ul id="settings" class="dropdown-menu">
                        <li>
                            <a href="/teacher-settings.html">
                                <i class="glyphicon glyphicon-cog"></i> Settings
                            </a>
                        </li>
                        <li>
                            <a href="#" id="logout">
                                <i class="glyphicon glyphicon-log-out"></i> Logout
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
        
        <div class="main-content">
        
            <div class="container-fluid">
                <div class="col-md-12">
                    <div class="panel clearfix">
                        <div class="row">
                            <div class="col-sm-7">
                                <h1 class="panel-caption">
                                    My Assignment Folders
                                </h1>
                            </div>
                            <div class="col-sm-5 assignment-info">
                                <button class="btn btn-primary" data-toggle="modal" data-target="#addFolderModal">
                                    <i class="glyphicon glyphicon-plus"></i>
                                    Add New Assignment Folder
                                </button>
                            </div>
                        </div>

                        <table class="cd-table table table-striped">
                            <thead>
                                <tr>
                                    <th>Assignment Folder Title</th>
                                    <th>Due on</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody id="coursesList">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- add folder popup -->
        <div class="modal fade" id="addFolderModal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 class="modal-title">Add New Assignment Folder</h4>
                    </div>
                    <div class="modal-body">
                        <div class="form-group col-xs-12">
                            <label>Assignment Folder Title</label>
                            <input class="form-control" type="text" id="newFolderTitle">
                        </div>
                        <div class="form-group col-xs-6">
                            <label>Due date</label>
                            <input class="form-control" type="date" id="newFolderDate">
                        </div>
                        <div class="form-group col-xs-6">
                            <label>Time</label>
                            <input class="form-control" type="time" id="newFolderTime">
                        </div>
                        <button class="btn btn-primary" id="addNewFolder">Add</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- /add folder popup -->
        
        <!-- edit folder popup -->
        <div class="modal fade" id="editFolderModal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 class="modal-title">Edit Assignment Folder</h4>
                    </div>
                    <div class="modal-body">
                        <div class="form-group col-xs-12">
                            <label>Assignment Folder Title</label>
                            <input class="form-control" type="text" value="Introduction to HTML" id="editAssignmentTitle">
                        </div>
                        <div class="form-group col-xs-6">
                            <label>Due date</label>
                            <input class="form-control" type="date" id="editAssignmentDate">
                        </div>
                        <div class="form-group col-xs-6">
                            <label>Time</label>
                            <input class="form-control" type="time" id="editAssignmentTime">
                        </div>
                        <button class="btn btn-primary" id="editAssignmentConfirm">Save</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- /edit folder popup -->
        
        <!-- delete folder popup -->
        <div class="modal fade" id="deleteFolderModal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title">Confirm Deletion</h4>
                    </div>
                    <div class="modal-body text-center">
                        <h4>Are you aure to delete the assignment folder</h4>
                        <h3 style="margin-bottom: 50px;" id="deleteAssignmentTitle"></h3>
                        <button class="btn btn-primary" id="deleteAssignmentConfirm">Yes</button>
                        <button class="btn" id="deleteAssignmentDecline">No</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- /delete folder popup -->
    </div>
</template>

<script>
    
</script>