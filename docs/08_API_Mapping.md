# 8. Every API Mapping

## Service: auth.ts


------------------------------------------------

## Service: farmland.ts

- **Endpoint**: `/farmland/get_farmland_by_id`
- **Endpoint**: `/farmland/get_all_farmlands_by_state_id`
- **Endpoint**: `/farmland/get_facilities_by_farmland_id`
- **Endpoint**: `/farmland/get_all_legal_documents_by_farmland_id`
- **Endpoint**: `/farmland/remove_farm_land_from_user_saved_list`
- **Endpoint**: `/farmland/get_all_saved_farmlands_by_user_id`
- **Endpoint**: `/farmland/add_land_to_user_saved_list`

------------------------------------------------

## Service: home.ts

- **Endpoint**: `/home/get_all_district_by_state_id`
- **Endpoint**: `/home/get_farmland_by_tag_and_state`

------------------------------------------------

## Service: mail.ts


------------------------------------------------

## Service: master.ts

- **Endpoint**: `/master/get_all_master_data`
- **Endpoint**: `/master/get_all_geo_master_data`

------------------------------------------------

## Service: unlocked.ts

- **Endpoint**: `/home/get_user_unlocked_farmlands`

------------------------------------------------

## Service: upload.ts

- **Endpoint**: `/home/get_user_uploaded_farmlands`

------------------------------------------------

## Service: user.ts

- **Endpoint**: `/user/create_user`
- **Endpoint**: `${MAIL_API_BASE_URL}/user/createAgent`
- **Endpoint**: `${MAIL_API_BASE_URL}/user/createRoleManager`
- **Endpoint**: `/user/get_user_bought_farmlands`
- **Endpoint**: `/user/get_user_details_by_id`
- **Endpoint**: `/user/update_user_details`

------------------------------------------------

## Service: verification.ts

- **Endpoint**: `/verification/get_verification_lands_by_user_id`
- **Endpoint**: `/verification/submit_farmland_to_verification`

------------------------------------------------

