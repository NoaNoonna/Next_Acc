package kr.co.seoulit.account.operate.funds.controller;

import kr.co.seoulit.account.operate.funds.service.FundService;
import kr.co.seoulit.account.operate.funds.to.PlanBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

@CrossOrigin({"*"})
@RestController
@RequestMapping({"/funds"})
public class FundController {
    @Autowired
    private FundService fundService;

    public FundController(){
    }

    //POST 일자별 자금계획 추가
    @PostMapping("/dailyFundPlan")
    public ResponseEntity<Map<String, Object>> registerPlan(@RequestBody PlanBean planBean){
        HashMap<String, Object> map = new HashMap<>();

        String planNo = this.fundService.registerPlan(planBean);

        map.put("planNo", planNo);
        return ResponseEntity.status(HttpStatus.CREATED).body(map);
    }

    //GET 일자별 자금계획 전체조회
    @GetMapping("/dailyFundPlan")
    public ResponseEntity<Map<String, Object>> getDailyFundPlan(@RequestParam("startDate") String startDate,
                                                                @RequestParam("endDate") String endDate){
        HashMap<String, Object> map = new HashMap<>();

        HashMap<String, ArrayList<PlanBean>> dailyFundPlanMap = fundService.getDailyFundPlan(startDate, endDate);
        if(dailyFundPlanMap.size()==0){
            return ResponseEntity.notFound().build(); //없을경우
        }

        map.put("inExpectedPlanList", dailyFundPlanMap.get("inExpectedPlanList"));
        map.put("outExpectedPlanList", dailyFundPlanMap.get("outExpectedPlanList"));

        return ResponseEntity.ok(map);
    }

    //PUT 일자별 자금계획 수정
    @PutMapping("/dailyFundPlan")
    public ResponseEntity<Map<String, Object>> updateDailyFundPlan(@RequestBody PlanBean planBean){
        HashMap<String, Object> map = new HashMap<>();

        try{
            fundService.updateDailyFundPlan(planBean);
            map.put("errorMsg", "수정 되었습니다.");
        }catch(Exception e){
            map.put("errorMsg", "수정 실패하였습니다.");
        }
        return ResponseEntity.ok(map);
    }

    //DELETE 일자별 자금계획 삭제
    @DeleteMapping("/dailyFundPlan")
    public ResponseEntity<Map<String, Object>> deleteDailyFundPlan(@RequestParam("planNo") String planNo){
        HashMap<String, Object> map = new HashMap<>();

        try{
            fundService.deleteDailyFundPlan(planNo);
            map.put("errorMsg", "삭제 되었습니다.");
        }catch(Exception e){
            map.put("errorMsg", "삭제 실패하였습니다.");
        }
        return ResponseEntity.ok(map);
    }
}
