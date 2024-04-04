package kr.co.seoulit.account.operate.funds.service;

import kr.co.seoulit.account.operate.funds.dao.FundDAO;
import kr.co.seoulit.account.operate.funds.repository.FundRepository;
import kr.co.seoulit.account.operate.funds.to.PlanBean;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.HashMap;

@RequiredArgsConstructor
@Component
public class FundServiceImpl implements FundService {

    @Autowired
    private FundDAO fundDAO;
    @Autowired
    private FundRepository fundRepository;

    //일자별자금계획 추가
    @Override
    public String registerPlan(PlanBean planBean){

        StringBuffer planNo = new StringBuffer();
        String planNoDate = planBean.getPlanDate().replace("-", "");
        planNo.append(planNoDate);
        planNo.append("PLAN"); // 20231221PLAN

        String lastNo = fundDAO.getPlanMaxNo(planNoDate);
        if (lastNo == null){
            lastNo = "00000";
        }
        int length = lastNo.length();

        String code = "0000" + (Integer.parseInt(lastNo.substring(length - 5)) + 1) + "";
        planNo.append(code.substring(code.length() - 5)); // 20231116SLIP00001
        planBean.setPlanNo(planNo.toString());

        fundRepository.save(planBean);

        return planNo.toString();
    }

    //일자별자금계획 조회
    @Override
    public HashMap<String, ArrayList<PlanBean>> getDailyFundPlan(String startDate, String endDate){
        HashMap<String, ArrayList<PlanBean>> param = new HashMap<>();

        HashMap<String, Object> inData = new HashMap<>();
        inData.put("balanceDivision", "수입");
        inData.put("startDate", startDate);
        inData.put("endDate", endDate);

        HashMap<String, Object> outData = new HashMap<>();
        outData.put("balanceDivision", "지출");
        outData.put("startDate", startDate);
        outData.put("endDate", endDate);

        ArrayList<PlanBean> inExpectedPlanList = fundDAO.getDailyFundPlan(inData);
        ArrayList<PlanBean> outExpectedPlanList = fundDAO.getDailyFundPlan(outData);

        param.put("inExpectedPlanList", inExpectedPlanList);
        param.put("outExpectedPlanList", outExpectedPlanList);

        return param;
    }

    //일자별 자금계획 수정
    @Override
    public void updateDailyFundPlan(PlanBean planBean){
        fundDAO.updateDailyFundPlan(planBean);
    }

    @Override
    public void deleteDailyFundPlan(String planNo){
        fundRepository.deleteById(planNo);
    }
}
