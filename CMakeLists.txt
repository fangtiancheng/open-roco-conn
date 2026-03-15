cmake_minimum_required(VERSION 3.15)
project(open_roco_conn)
set(CMAKE_CXX_STANDARD 17)
set(SRC_DIR ${CMAKE_CURRENT_SOURCE_DIR}/open_roco_conn)

# base
set(BASE_DIR ${SRC_DIR}/base)
add_library(base STATIC
    ${BASE_DIR}/constants.hpp
    ${BASE_DIR}/define.cpp
    ${BASE_DIR}/rf_base.cpp
    ${BASE_DIR}/property_des.cpp
)
target_include_directories(base PRIVATE ${SRC_DIR} ${BASE_DIR})

# adf
set(ADF_DIR ${SRC_DIR}/adf_protocol)
add_library(adf_protocol STATIC
    ${ADF_DIR}/adf.cpp
    ${ADF_DIR}/adf_cmds_type.hpp
    ${ADF_DIR}/adf_h5.cpp
    ${ADF_DIR}/adf_head.cpp
    ${ADF_DIR}/adf_processors.cpp
    ${ADF_DIR}/angel_data_event.cpp
    ${ADF_DIR}/bag_spirit_skill_data.cpp
    ${ADF_DIR}/byte_array.cpp
)
target_include_directories(adf_protocol PRIVATE ${SRC_DIR} ${ADF_DIR})
target_link_libraries(adf_protocol PRIVATE base)

set(PERSON_DIR ${SRC_DIR}/person)
add_library(person STATIC
    ${PERSON_DIR}/get_items_by_type_p.cpp
    ${PERSON_DIR}/p_d_get_spirits_detail.cpp
    ${PERSON_DIR}/p_detail_role_info.cpp
    ${PERSON_DIR}/p_read_help.cpp
    ${PERSON_DIR}/p_return_code.cpp
    ${PERSON_DIR}/p_role_info.cpp
    ${PERSON_DIR}/st_spirit_detail.cpp
    ${PERSON_DIR}/protocol_helper.cpp
    ${PERSON_DIR}/role_data.cpp
)
target_include_directories(person PRIVATE ${SRC_DIR} ${PERSON_DIR})
target_link_libraries(person PRIVATE base adf_protocol)

# spirit
set(SPIRIT_DIR ${SRC_DIR}/spirit)
add_library(spirit STATIC
    ${SPIRIT_DIR}/net_define.hpp
    ${SPIRIT_DIR}/p_bag_spirit_data.cpp
    ${SPIRIT_DIR}/p_bag_spirit_skill_data.cpp
    ${SPIRIT_DIR}/p_spirit_value.cpp
    ${SPIRIT_DIR}/spirit_equipment_info.cpp
    ${SPIRIT_DIR}/spirit_info_processor.cpp
    ${SPIRIT_DIR}/spirit_properties.cpp
    ${SPIRIT_DIR}/spirit_skill_info.cpp
    ${SPIRIT_DIR}/st_spirit_info.cpp
)
target_include_directories(spirit PRIVATE ${SRC_DIR} ${SPIRIT_DIR})
target_link_libraries(spirit PRIVATE base adf_protocol)

# combat
set(COMBAT_DIR ${SRC_DIR}/combat)
add_library(combat STATIC
    ${COMBAT_DIR}/attack_affect.cpp
    ${COMBAT_DIR}/attack_res_info.cpp
    ${COMBAT_DIR}/buff_affect.hpp
    ${COMBAT_DIR}/combat_net_cmds_type.hpp
    ${COMBAT_DIR}/combat_play_fight_state.cpp
    ${COMBAT_DIR}/combat_res_type.cpp
    ${COMBAT_DIR}/combat_result_info.cpp
    ${COMBAT_DIR}/combat_system_dp.cpp
    ${COMBAT_DIR}/combat_type.hpp
    ${COMBAT_DIR}/cross_server_fight_result_p.cpp
    ${COMBAT_DIR}/cross_server_req_combat_start_p.cpp
    ${COMBAT_DIR}/cross_server_req_fight_p.cpp
    ${COMBAT_DIR}/fight_result_p.cpp
    ${COMBAT_DIR}/open_combat_des.hpp
    ${COMBAT_DIR}/p_read_help.cpp
    ${COMBAT_DIR}/p_req_fight.cpp
    ${COMBAT_DIR}/p_req_start.cpp
    ${COMBAT_DIR}/req_combat_start_p.cpp
    ${COMBAT_DIR}/req_fight_p.hpp
    ${COMBAT_DIR}/s_combat_result_state.cpp
    ${COMBAT_DIR}/s_combat_start_state.cpp
    ${COMBAT_DIR}/war_req_combat_start_p.cpp
)
target_include_directories(combat PRIVATE ${SRC_DIR} ${COMBAT_DIR})
target_link_libraries(combat PRIVATE base adf_protocol)

#global
set(GLOBAL_DIR ${SRC_DIR}/global)
add_library(global STATIC
    ${GLOBAL_DIR}/global_api.cpp
    ${GLOBAL_DIR}/global_manager.cpp
)
target_include_directories(global PRIVATE ${SRC_DIR} ${GLOBAL_DIR})
target_link_libraries(global PRIVATE base adf_protocol)