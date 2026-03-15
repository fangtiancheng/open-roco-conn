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
    ${ADF_DIR}/protocol_helper.cpp
)
target_include_directories(adf_protocol PRIVATE ${SRC_DIR} ${ADF_DIR})
target_link_libraries(adf_protocol PRIVATE base)

set(PERSON_DIR ${SRC_DIR}/person)
add_library(person STATIC
    ${PERSON_DIR}/p_bag_spirit_skill_data.cpp
    ${PERSON_DIR}/p_bag_spirit_data.cpp
    ${PERSON_DIR}/p_d_get_spirits_detail.cpp
    ${PERSON_DIR}/p_detail_role_info.cpp
    ${PERSON_DIR}/p_read_help.cpp
    ${PERSON_DIR}/p_return_code.cpp
    ${PERSON_DIR}/p_role_info.cpp
    ${PERSON_DIR}/p_spirit_value.cpp
    ${PERSON_DIR}/st_spirit_detail.cpp
)
target_include_directories(person PRIVATE ${SRC_DIR} ${PERSON_DIR})
target_link_libraries(person PRIVATE base adf_protocol)

# spirit
set(SPIRIT_DIR ${SRC_DIR}/spirit)
add_library(spirit STATIC
    ${SPIRIT_DIR}/net_define.hpp
    ${SPIRIT_DIR}/spirit_equipment_info.cpp
    ${SPIRIT_DIR}/spirit_info_processor.cpp
    ${SPIRIT_DIR}/spirit_properties.cpp
    ${SPIRIT_DIR}/spirit_skill_info.cpp
    ${SPIRIT_DIR}/st_spirit_info.cpp
)
target_include_directories(spirit PRIVATE ${SRC_DIR} ${SPIRIT_DIR})
target_link_libraries(spirit PRIVATE base adf_protocol)

# fight
set(FIGHT_DIR ${SRC_DIR}/fight)
add_library(fight STATIC
    ${FIGHT_DIR}/fight_result_p.cpp
    ${FIGHT_DIR}/req_fight_p.hpp
)
target_include_directories(fight PRIVATE ${SRC_DIR} ${FIGHT_DIR})
target_link_libraries(fight PRIVATE base adf_protocol)
