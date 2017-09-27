<template>
    <div>

        <header class="main-header navbar navbar-inverse">
            <a class="main-logo" href="/">
                College<span class="text-blue">desk</span>
            </a>
            <div class="main-header__content">
                <h1 class="main-header__caption">Assignment Grading & Feedback Platform</h1>

                <div class="dropdown main-header__name">
                    <a data-target="settings" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span>{{fullName}}</span>
                        <span class="caret"></span>
                    </a>

                    <ul id="settings" class="dropdown-menu">
                        <li>
                            <router-link to="/student-settings">
                                <i class="glyphicon glyphicon-cog"></i> Settings
                            </router-link>
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
                                    <i class="glyphicon glyphicon-file"></i> Introduction to HTML
                                </h1>
                            </div>
                            <div class="col-sm-5 assignment-info">
                                <span class="badge badge-due">Due 12/12/2017 | 12:30 am</span>

                                <p class="marks-obtained">
                                    Marks obtained:
                                    <span class="badge badge-marks">
                                        — / 30
                                    </span>
                                </p>
                            </div>
                        </div>
    
                        <p class="alert alert-info">Click on a question to view or edit answer</p>
    
                        <table class="cd-table table table-striped">
                            <thead>
                                <tr>
                                    <th>Q#</th>
                                    <th>Marks</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><a href="#" data-toggle="modal" data-target="#questionPopup">Q1 - What is the function of prototype in software development?</a></td>
                                    <td><span class="badge badge-marks">— / 3</span></td>
                                </tr>
                                <tr>
                                    <td><a href="#" data-toggle="modal" data-target="#questionPopup">Q2 - What is the function of prototype in software development? What are the criteria which determines feasibility of a  software?</a></td>
                                    <td><span class="badge badge-marks">— / 3</span></td>
                                </tr>
                                <tr>
                                    <td><a href="#" data-toggle="modal" data-target="#questionPopup">Q3 - What is the function of prototype in software development? What are the criteria which determines feasibility of a  software?</a></td>
                                    <td><span class="badge badge-marks">— / 3</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    
        </div>
    
    
        <!-- question popup -->
        <div class="modal fade" id="questionPopup" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title">Introduction into HTML</h4>
                    </div>
                    <div class="modal-body">
                        <p class="marks-obtained text-right">
                            Marks:
                            <span class="badge badge-marks">
                                — / 10
                            </span>
                        </p>
                        <p>Q1: What is the function of prototype in software development? What are the criteria which determines feasibility of a software?</p>
                        <textarea name="editor1" id="editor1" rows="10" cols="80"></textarea>
                        <button class="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- /question popup -->

    </div>
</template>

<script>
export default {
    computed: {
        fullName() {
            const user = this.$store.getters.user.user
            return `${user.firstName} ${user.lastName}`
        }
    }
}    
</script>