<template>    
    <div class="container pt-3 px-5">
        <div class="row">
            <div class="col-md-12">
                <h3 class="page-title">Set Permissions</h3>
                <div class="portlet-body">
                    <form>
                        <div class="row">
                            <div class="form-group col-md-7">
                                <div class="row">
                                    <div class="col-md-12">
                                        <input type="text" name="mobile" id="mobile" required/>
                                    </div>
                                </div>
                            </div>
                            <button type="button" class="btn btn-info" style="margin-left: 1em;" id="load-btn">
                                    Load
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-md-12">
                <div class="portlet-body">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="col-md-3">
                                <input type="checkbox" v-model="checkAll" class="cb-element mr-1" id="checkAll">
                                <label for="checkAll">Check All</label>
                            </div>
                        </div>
                    </div>

                    <form>
                        <div id="permission"></div>
                        <br>
                        <div class="row mt-4 col-md-12">
                            <button class="btn btn-success" type="submit">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import RolePermission from '../../api/role-permission'

export default {
    methods:{
        getUsers(){},
        load(){},
        permissionUpdate:function () {},
    }
};
</script>
<style scoped></style>
