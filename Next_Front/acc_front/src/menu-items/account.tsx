// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconApps, IconUserCheck, IconBasket, IconMessages, IconLayoutKanban, IconMail, IconCalendar, IconNfc } from '@tabler/icons';
import { NavItemType } from 'types';

// constant
const icons = {
  IconApps,
  IconUserCheck,
  IconBasket,
  IconMessages,
  IconLayoutKanban,
  IconMail,
  IconCalendar,
  IconNfc
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const account: NavItemType = {
  id: 'accounting',
  title: <FormattedMessage id="accounting" />,
  icon: icons.IconApps,
  type: 'group',
  children: [
    {
      id: 'slipBaseFormPage',
      title: <FormattedMessage id="slipBaseFormPage" />,
      type: 'collapse',
      icon: icons.IconUserCheck,
      children: [
        {
          id: 'slipFormPage',
          title: <FormattedMessage id="slipFormPage" />,
          type: 'item',
          url: '/account/posting/slip/Slip'
        },
        {
          id: 'approvalManagerFormPage',
          title: <FormattedMessage id="approvalManagerFormPage" />,
          type: 'item',
          url: '/account/posting/approvalmanager/ApprovalManager'
        },
        {
          id: 'ReceiptFormPage',
          title: <FormattedMessage id="ReceiptFormPage" />,
          type: 'item',
          url: '/account/posting/receipt/Receipt'
        },
        {
          id: 'journalFormPage',
          title: <FormattedMessage id="journalFormPage" />,
          type: 'item',
          url: '/account/posting/jounalform/JounalForm'
        },
        {
          id: 'detailTrialBalancePage',
          title: <FormattedMessage id="detailTrialBalancePage" />,
          type: 'item',
          url: '/account/statement/detailtrialbalance/DetailTrialBalance'
        },
        {
          id: 'generalAccountLedgerPage',
          title: <FormattedMessage id="generalAccountLedgerPage" />,
          type: 'item',
          url: '/account/posting/generalaccountledger/GeneralAccountLedger'
        },
        {
          id: 'cashJournalPage',
          title: <FormattedMessage id="cashJournalPage" />,
          type: 'item',
          url: '/account/statement/cashjournal/CashJournal'
        }
      ]
    },
    {
      id: 'basicInformationManagement',
      title: <FormattedMessage id="basicInformationManagement" />,
      type: 'collapse',
      icon: icons.IconUserCheck,
      children: [
        {
          id: 'accountCodeManagerPage',
          title: <FormattedMessage id="accountCodeManagerPage" />,
          type: 'item',
          url: '/account/base/accountform/AccountDialog'
        },
        {
          id: 'customerManagerPage',
          title: <FormattedMessage id="customerManagerPage" />,
          type: 'item',
          url: '/account/base/workplacemanagement/WorkplaceManagement'
        }
      ]
    },
    {
      id: 'accountingStatementsManagement',
      title: <FormattedMessage id="accountingStatementsManagement" />,
      type: 'collapse',
      icon: icons.IconNfc,
      children: [
        {
          id: 'totalTrialBalancePage',
          title: <FormattedMessage id="totalTrialBalancePage" />,
          type: 'item',
          url: '/account/statement/totaltrialbalance/TotalTrialBalance'
        },
        {
          id: 'financialPositionPage',
          title: <FormattedMessage id="financialPositionPage" />,
          type: 'item',
          url: '/account/statement/financialstatements/FinancialStatements'
        },
        {
          id: 'incomeStatementPage',
          title: <FormattedMessage id="incomeStatementPage" />,
          type: 'item',
          url: '/account/statement/incomestatement/IncomeStatement'
        },
        {
          id: 'monthIncomeStatementPage',
          title: <FormattedMessage id="monthIncomeStatementPage" />,
          type: 'item',
          url: '/account/statement/monthincomestatement/MonthIncomeStatement'
        },
        {
          id: 'capitalStatementPage',
          title: <FormattedMessage id="capitalStatementPage" />,
          type: 'item',
          url: '/account/statement/capitalstatement/CapitalStatement'
        },
        {
          id: 'accountingInputPage',
          title: <FormattedMessage id="accountingInputPage" />,
          type: 'item',
          url: '/account/statement/accounting/Accounting'
        },
        {
          id: 'costStatementPage',
          title: <FormattedMessage id="costStatementPage" />,
          type: 'item',
          url: ''
        },
        {
          id: 'retainedEarningsStatementPage',
          title: <FormattedMessage id="retainedEarningsStatementPage" />,
          type: 'item',
          url: ''
        },
        {
          id: 'monthCostStatementPage',
          title: <FormattedMessage id="monthCostStatementPage" />,
          type: 'item',
          url: ''
        },
        {
          id: 'cashFlowStatementPage',
          title: <FormattedMessage id="cashFlowStatementPage" />,
          type: 'item',
          url: ''
        }
      ]
    },
    {
      id: 'budgetManagement',
      title: <FormattedMessage id="budgetManagement" />,
      type: 'collapse',
      url: '/utils/util-animation',
      icon: icons.IconBasket,
      children: [
        {
          id: 'budgetRequestPage',
          title: <FormattedMessage id="budgetRequestPage" />,
          type: 'item',
          url: '/account/budget/budgetrequest/BudgetRequest'
        },
        {
          id: 'budgetFormulationPage',
          title: <FormattedMessage id="budgetFormulationPage" />,
          type: 'item',
          url: '/account/budget/budgetformulation/BudgetFormulation'
        },
        {
          id: 'budgetStatusPage',
          title: <FormattedMessage id="budgetStatusPage" />,
          type: 'item',
          url: '/account/budget/budgetstatus/BudgetStatus'
        }
      ]
    },
    {
      id: 'fixedAssetManagement',
      title: <FormattedMessage id="fixedAssetManagement" />,
      type: 'collapse',
      url: '/utils/util-grid',
      icon: icons.IconBasket,
      children: [
        {
          id: 'fixedAssetRegistrationPage',
          title: <FormattedMessage id="fixedAssetRegistrationPage" />,
          type: 'item',
          url: '/account/operate/fixedAsset/FixedAsset'
        },
        {
          id: 'depreciationSchedulePage',
          title: <FormattedMessage id="depreciationSchedulePage" />,
          type: 'item',
          url: '/account/operate/depreciation/Depreciation'
        },
        {
          id: 'fixedAssetLedgerPage',
          title: <FormattedMessage id="fixedAssetLedgerPage" />,
          type: 'item',
          url: '/account/operate/fixedAssetLedger/FixedAssetLedger'
        }
      ]
    },
    {
      id: 'fundManagement',
      title: <FormattedMessage id="fundManagement" />,
      type: 'collapse',
      url: '/utils/util-grid',
      icon: icons.IconBasket,
      children: [
        {
          id: 'dailyFundPlanInputFormPage',
          title: <FormattedMessage id="dailyFundPlanInputFormPage" />,
          type: 'item',
          url: '/account/operate/funds/dailyFundPlanInput/FundPlanInputTab'
        },
        {
          id: 'fundPlanningCalendarFormPage',
          title: <FormattedMessage id="fundPlanningCalendarFormPage" />,
          type: 'item',
          url: ''
        },
        {
          id: 'noteReceivableSpecificationFormPage',
          title: <FormattedMessage id="noteReceivableSpecificationFormPage" />,
          type: 'item',
          url: '/account/operate/funds/noteSpecification/NoteReceivableSpecification'
        },
        {
          id: 'notePayableSpecificationFormPage',
          title: <FormattedMessage id="notePayableSpecificationFormPage" />,
          type: 'item',
          url: '/account/operate/funds/noteSpecification/NotePayableSpecification'
        },
        {
          id: 'dailyFundJournalFormPage',
          title: <FormattedMessage id="dailyFundJournalFormPage" />,
          type: 'item',
          url: '/account/operate/funds/dailyFundJournalStatus/FundJournalTab'
        }
      ]
    },
    {
      id: 'corporateVehicleManagement',
      title: <FormattedMessage id="corporateVehicleManagement" />,
      type: 'collapse',
      url: '/utils/util-grid',
      icon: icons.IconBasket,
      children: [
        {
          id: 'vehicleRegistrationPage',
          title: <FormattedMessage id="vehicleRegistrationPage" />,
          type: 'item',
          url: ''
        },
        {
          id: 'vehicleLogbookPage',
          title: <FormattedMessage id="vehicleLogbookPage" />,
          type: 'item',
          url: ''
        }
      ]
    }
  ]
};

export default account;
