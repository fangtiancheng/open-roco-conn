#pragma once
#include "proto_bundle/zone_novice_revision.hpp"

// JS-aligned type container: ZoneNoviceRevision.QueryStatusRsp / ZoneNoviceRevision.GetAwardRsp ...
struct ZoneNoviceRevisionProto {
    using RetInfo = ZoneNoviceRevision::RetInfo;
    using ItemInfo = ZoneNoviceRevision::ItemInfo;
    using QueryAwardStatusRsp = ZoneNoviceRevision::QueryAwardStatusRsp;
    using GetAwardReq = ZoneNoviceRevision::GetAwardReq;
    using GetAwardRsp = ZoneNoviceRevision::GetAwardRsp;
    using RecoverHpRsp = ZoneNoviceRevision::RecoverHpRsp;
    using SceneQueryRsp = ZoneNoviceRevision::SceneQueryRsp;
    using QueryStatusRsp = ZoneNoviceRevision::QueryStatusRsp;
    using ChangeStatusRsp = ZoneNoviceRevision::ChangeStatusRsp;
    using QualifyingNotify = ZoneNoviceRevision::QualifyingNotify;
    using OpenLadderRsp = ZoneNoviceRevision::OpenLadderRsp;
    using QueryIconRsp = ZoneNoviceRevision::QueryIconRsp;
};

