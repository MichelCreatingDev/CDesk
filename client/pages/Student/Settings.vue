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
                            <a @click="logout">
                                <i class="glyphicon glyphicon-log-out"></i> Logout
                            </a>
                        </li>
                    </ul>
                </div>
        
            </div>
        </header>

        <div class="main-content">
        
            <div class="container">
                <div class="col-md-6 col-md-offset-3">
                    <div class="panel clearfix">
                        <form action="">
                            <div class="form-group">
                                <label for="">First Name</label>
                                <input class="form-control" type="text" v-model="firstName">
                            </div>
                            <div class="form-group">
                                <label for="">Last Name</label>
                                <input class="form-control" type="text" v-model="lastName">
                            </div>
                            <div class="form-group">
                                <label for="">School / College / Institution</label>
                                <input class="form-control" type="text" v-model="college">
                            </div>
                            <div class="form-group">
                                <a href="#" data-toggle="modal" data-target="#resetPassword">
                                    <i class="glyphicon glyphicon-cog"></i> Reset password?
                                </a>
                            </div>
        
                            <button class="btn btn-lg btn-wide btn-default" @click="onSaveUserInfo">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        
        </div>
        
        <!-- reset password popup -->
        <div class="modal fade" id="resetPassword" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title">Reset Password</h4>
                    </div>
                    <div class="modal-body">
        
                        <div class="form-group">
                            <label for="">Old Password</label>
                            <input type="password" class="form-control">
                        </div>
        
                        <div class="form-group">
                            <label for="">New Password</label>
                            <input type="password" class="form-control">
                        </div>
        
                        <div class="form-group">
                            <label for="">Re-Type Password</label>
                            <input type="password" class="form-control">
                        </div>
        
                        <button class="btn btn-primary">Reset Password</button>
        
                    </div>
                </div>
            </div>
        </div>
        <!-- /reset password popup -->
    </div>
</template>

<script>
export default {
    computed: {
        fullName: function() {
            const user = this.$store.getters.user.user
            return `${user.firstName} ${user.lastName}`
        }
    },
    data: function() {
        return {
            firstName: '',
            lastName: '',
            college: ''
        }
    },
    mounted: function() {
        const user = this.$store.getters.user.user
        this.firstName = user.firstName
        this.lastName = user.lastName
        this.college = user.college
    },
    methods: {
        logout: function() {

        },

    }
}    
</script>