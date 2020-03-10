export default {
    sys_common_dict : '/sys/dict/list',
    sys_common_dict_item : '/sys/dictItem/list',
    sys_common_upload : '/sys/common/upload',
    sys_user_query_list: '/sys/user/list',
    sys_user_change_pwd : '/sys/user/changPassword',
    sys_user_delete : '/sys/user/delete',
    sys_user_deleteBatch : '/sys/user/deleteBatch',
    sys_user_frozenBatch : '/sys/user/frozenBatch',
    sys_user_unique_user_check : '/sys/user/checkOnlyUser',
    sys_user_generate_user_id : '/sys/user/generateUserId',
    //sys_user_add_user_dept_ids : '/sys/user/addUDepartIds',
    sys_user_agent_user_info_query: '/sys/sysUserAgent/queryByUserName',
    sys_user_agent_edit: '/sys/sysUserAgent/edit',
    sys_user_edit_user_dept_ids : '/sys/user/editUDepartIds',
    sys_user_query_user_by_role : '/sys/user/userRoleList',
    sys_user_query_user_by_dept : '/sys/user/departUserList',
    sys_user_edit_dept_with_user : '/sys/user/editSysDepartWithUser',
    sys_user_delete_dept_user : '/sys/user/deleteUserInDepart',
    sys_user_delete_batch_dept_user : '/sys/user/deleteUserInDepartBatch',
    sys_user_export : '/sys/user/exportXls',
    sys_user_import : '/sys/user/importExcel',
    sys_user_add : '/sys/user/add',
    sys_user_edit : '/sys/user/edit',
    sys_role_query_all: '/sys/role/queryall',
    sys_role_query_user_role : '/sys/user/queryUserRole',
    sys_role_query_list : '/sys/role/list',
    sys_role_query_tree_list : '/sys/role/queryTreeList',
    sys_role_query_permission_by_role : '/sys/permission/queryRolePermission',
    sys_role_save_permission_by_role : '/sys/permission/saveRolePermission',
    sys_role_add_user_role : '/sys/user/addSysUserRole',
    sys_role_delete_user_role : '/sys/user/deleteUserRole',
    sys_role_delete_batch_user_role : '/sys/user/deleteUserRoleBatch',
    sys_role_data_rule : '/sys/role/datarule',
    sys_role_export : '/sys/role/exportXls',
    sys_role_import : '/sys/role/importExcel',
    sys_role_add : '/sys/role/add',
    sys_role_delete_batch : '/sys/role/deleteBatch',
    sys_role_update : '/sys/role/edit',
    sys_dept_query_all : '/sys/sysDepart/queryTreeList',
    sys_dept_query_by_user : '/sys/user/userDepartList',
    sys_dept_add : '/sys/sysDepart/add',
    sys_dept_edit : '/sys/sysDepart/edit',
    sys_dept_export : '/sys/sysDepart/exportXls',
    sys_dept_import : '/sys/sysDepart/importExcel',
    sys_dept_delete_batch : '/sys/sysDepart/deleteBatch',
    sys_dict_unique_check : '/sys/duplicate/check',
    sys_menu_query_list: '/sys/permission/list',
    sys_menu_delete_batch : '/sys/permission/deleteBatch',
    sys_menu_add : '/sys/permission/add',
    sys_menu_edit : '/sys/permission/edit',
    sys_menu_query_data_rule : '/sys/permission/queryPermissionRule',
    sys_menu_add_add_permission_rule: '/sys/permission/addPermissionRule',
    sys_menu_add_edit_permission_rule: '/sys/permission/editPermissionRule',
    sys_menu_add_delete_permission_rule: '/sys/permission/deletePermissionRule',
    sys_dict_query_list : '/sys/dict/list',
    sys_dict_add : '/sys/dict/add',
    sys_dict_edit : '/sys/dict/edit',
    sys_dict_delete : '/sys/dict/delete',
    sys_dict_delete_list : '/sys/dict/deleteList',
    sys_dict_delete_physic : '/sys/dict/deletePhysic/',
    sys_dict_recycle : '/sys/dict/back/',
    sys_dict_export : '/sys/dict/exportXls',
    sys_dict_import : '/sys/dict/importExcel',
    sys_dict_item_add : '/sys/dictItem/add',
    sys_dict_item_edit : '/sys/dictItem/edit',
    sys_dict_item_delete : '/sys/dictItem/delete',
    sys_dict_category_query_list : '/sys/category/rootList',
    sys_dict_category_query_child : '/sys/category/childList',
    sys_dict_category_add : '/sys/category/add',
    sys_dict_category_edit : '/sys/category/edit',
    sys_dict_category_delete : '/sys/category/delete',
    sys_dict_category_deleteBatch : '/sys/category/deleteBatch',
    sys_dict_category_query_parent_node_name : '/sys/dict/loadDictItem/sys_category,name,id',
    sys_my_message_query_list : '/sys/sysAnnouncementSend/getMyAnnouncementSend',
    sys_my_message_note_read_all : '/sys/sysAnnouncementSend/readAll',
    sys_my_message_note_read_one : '/sys/sysAnnouncementSend/editByAnntIdAndUserId',
    sys_sys_announcement_query_list: '/sys/annountCement/list',
    sys_sys_announcement_importExcel: '/sys/annountCement/importExcel',
    sys_sys_announcement_exportXls: '/sys/annountCement/exportXls',
    sys_sys_announcement_add: '/sys/annountCement/add',
    sys_sys_announcement_edit: '/sys/annountCement/edit',
    sys_sys_announcement_delete: '/sys/annountCement/delete',
    sys_sys_announcement_delete_batch: '/sys/annountCement/deleteBatch',
    sys_sys_announcement_release: '/sys/annountCement/doReleaseData',
    sys_sys_announcement_revoke: '/sys/annountCement/doReovkeData',
    sys_position_query_list : '/sys/position/list',
    sys_position_add : '/sys/position/add',
    sys_position_edit : '/sys/position/edit',
    sys_position_delete_batch : '/sys/position/deleteBatch',
    sys_position_export : '/sys/position/exportXls',
    sys_position_import : '/sys/position/importExcel',
    sys_quartz_job_query_list: '/sys/quartzJob/list',
    sys_quertz_job_add : '/sys/quartzJob/add',
    sys_quertz_job_edit : '/sys/quartzJob/edit',
    sys_quertz_job_export : '/sys/quartzJob/exportXls',
    sys_quertz_job_import : '/sys/quartzJob/importExcel',
    sys_quertz_job_delete_batch : '/sys/quartzJob/deleteBatch',
    sys_quertz_job_resume: '/sys/quartzJob/resume',
    sys_fill_rule_query_list: '/sys/fillRule/list',
    sys_fill_rule_add: '/sys/fillRule/add',
    sys_fill_rule_edit: '/sys/fillRule/edit',
    sys_fill_rule_delete_batch: '/sys/fillRule/deleteBatch',
    sys_fill_rule_export: '/sys/fillRule/exportXls',
    sys_fill_rule_import: '/sys/fillRule/importExcel',
    sys_fill_rule_generate_code: '/sys/fillRule/testFillRule',
    sys_check_rule_query_list : '/sys/checkRule/list',
    sys_check_rule_add : '/sys/checkRule/add',
    sys_check_rule_edit : '/sys/checkRule/edit',
    sys_check_rule_delete_batch : '/sys/checkRule/deleteBatch',
    sys_check_rule_import : '/sys/checkRule/importExcel',
    sys_check_rule_export : '/sys/checkRule/exportXls',
    sys_check_rule_check_by_code: '/sys/checkRule/checkByCode',
    sys_data_source_query_list: '/sys/dataSource/list',
    sys_data_source_add: '/sys/dataSource/add',
    sys_data_source_edit: '/sys/dataSource/edit',
    sys_data_source_delete_batch: '/sys/dataSource/deleteBatch',
    sys_data_source_import: '/sys/dataSource/importExcel',
    sys_data_source_export: '/sys/dataSource/exportXls',
    sys_data_source_test_connection : '/online/cgreport/api/testConnection'
}
