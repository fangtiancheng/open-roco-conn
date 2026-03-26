cmake_minimum_required(VERSION 3.15)
project(open_roco_conn)
set(CMAKE_CXX_STANDARD 23)
set(SRC_DIR ${CMAKE_CURRENT_SOURCE_DIR}/open_roco_conn)
if(MSVC)
    add_compile_options(/bigobj /utf-8 -D_WIN32_WINNT=0x0601)
endif()

find_package(Boost CONFIG REQUIRED COMPONENTS headers url json)
if(NOT TARGET Boost::system)
    add_library(Boost::system INTERFACE IMPORTED)
    set_property(TARGET Boost::system PROPERTY INTERFACE_LINK_LIBRARIES Boost::headers)
endif()
find_package(OpenSSL REQUIRED)
find_package(Iconv REQUIRED)
set(_saved_build_testing ${BUILD_TESTING})
set(BUILD_TESTING OFF)
add_subdirectory(${CMAKE_SOURCE_DIR}/third_party/certify)
set(BUILD_TESTING ${_saved_build_testing})
unset(_saved_build_testing)

# base
set(BASE_DIR ${SRC_DIR}/base)
add_library(base STATIC
    ${BASE_DIR}/constants.hpp
    ${BASE_DIR}/define.cpp
    ${BASE_DIR}/rf_base.cpp
    ${BASE_DIR}/property_des.cpp
    ${BASE_DIR}/unicode_translator.hpp
)
target_include_directories(base PRIVATE ${SRC_DIR} ${BASE_DIR})

# adf
set(ADF_DIR ${SRC_DIR}/adf_protocol)
add_library(adf_protocol STATIC
    ${ADF_DIR}/adf.cpp
    ${ADF_DIR}/adf_cmds_type.hpp
    ${ADF_DIR}/adf_head.cpp
    ${ADF_DIR}/adf_processors.cpp
    ${ADF_DIR}/angel_data_event.cpp
    ${ADF_DIR}/bag_spirit_skill_data.cpp
    ${ADF_DIR}/byte_array.cpp
    ${ADF_DIR}/byte_buffer.cpp
)
target_include_directories(adf_protocol PRIVATE ${SRC_DIR} ${ADF_DIR})
target_link_libraries(adf_protocol PRIVATE base Iconv::Iconv)

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

set(EVENT_DIR ${SRC_DIR}/event)
add_library(event STATIC
    ${EVENT_DIR}/base_event.cpp
    ${EVENT_DIR}/event_dispatcher.cpp
    ${EVENT_DIR}/tcp_conn_event.cpp
)
target_include_directories(event PRIVATE ${SRC_DIR} ${EVENT_DIR})
target_link_libraries(event PRIVATE base adf_protocol)

set(LOGIN_DIR ${SRC_DIR}/login)
add_library(login STATIC
    ${LOGIN_DIR}/adf_h5.cpp
    ${LOGIN_DIR}/login_data_body.cpp
    ${LOGIN_DIR}/login_data_processor.cpp
    ${LOGIN_DIR}/login_data_repply.cpp
    ${LOGIN_DIR}/server_info.hpp
    ${LOGIN_DIR}/server_keywords.hpp
)
target_include_directories(login PRIVATE ${SRC_DIR} ${LOGIN_DIR})
target_link_libraries(login PRIVATE base adf_protocol person)

#global
set(GLOBAL_DIR ${SRC_DIR}/global)
add_library(global STATIC
    ${GLOBAL_DIR}/angle_event_manager.cpp
    ${GLOBAL_DIR}/angle_main.cpp
    ${GLOBAL_DIR}/global.cpp
    ${GLOBAL_DIR}/global_api.cpp
    ${GLOBAL_DIR}/global_manager.cpp
    ${GLOBAL_DIR}/global_timer.cpp
    ${GLOBAL_DIR}/user_data.cpp
    ${GLOBAL_DIR}/web_socket_client.cpp
)
target_include_directories(global PRIVATE ${SRC_DIR} ${GLOBAL_DIR})
target_link_libraries(global PRIVATE base adf_protocol websocketpp Boost::headers)

set(HTTPREQ_DIR ${SRC_DIR}/httpreq)
add_library(httpreq STATIC
    ${HTTPREQ_DIR}/http_request.cpp
)
target_include_directories(httpreq PRIVATE ${SRC_DIR} ${HTTPREQ_DIR})
target_link_libraries(httpreq PRIVATE base Boost::headers Boost::url Boost::json OpenSSL::SSL)

set(WEBSOCK_DIR ${SRC_DIR}/websock)
add_library(websock STATIC
    ${WEBSOCK_DIR}/angel_tcp_connection.cpp
    ${WEBSOCK_DIR}/tcp_transmission.cpp
)
target_include_directories(websock PRIVATE ${SRC_DIR} ${WEBSOCK_DIR})
target_link_libraries(websock PRIVATE base adf_protocol global)

set(SPIRIT_BOOK_DIR ${SRC_DIR}/spirit_book)
add_library(spirit_book STATIC
    ${SPIRIT_BOOK_DIR}/spirit_books_conf_loader.cpp
)
target_include_directories(spirit_book PRIVATE ${SRC_DIR} ${SPIRIT_BOOK_DIR})
target_link_libraries(spirit_book PRIVATE base adf_protocol)

add_executable(test
    ./open_roco_conn/test.cpp
)
target_link_libraries(test PRIVATE
    Boost::headers Boost::url Boost::json OpenSSL::SSL
)
