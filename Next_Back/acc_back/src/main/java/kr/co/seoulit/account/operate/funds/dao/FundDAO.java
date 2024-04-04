package kr.co.seoulit.account.operate.funds.dao;

import kr.co.seoulit.account.operate.funds.to.PlanBean;
import org.apache.ibatis.annotations.Mapper;

import java.util.ArrayList;
import java.util.HashMap;

@Mapper
public interface FundDAO {

    //당일 마지막 계좌번호 조회
    public String getPlanMaxNo(String today);

    //일자별 자금계획 조회
    public ArrayList<PlanBean> getDailyFundPlan(HashMap<String, Object> Data);

    public void updateDailyFundPlan(PlanBean planBean);
}
