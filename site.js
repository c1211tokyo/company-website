(() => {
  "use strict";

  const LANGUAGE_KEY = "siteLanguage";
  const SUPPORTED_LANGUAGES = ["ja", "zh", "en"];

  const translations = {
    ja: {
      "meta.home.title": "株式会社一二一一 | 宿栖東京 — 東京の宿泊運営・旅行サービス",
      "meta.home.description": "株式会社一二一一は、宿栖東京ブランドを通じて、東京の宿泊施設運営、ゲスト・旅行支援、メディア・事業支援を行っています。",
      "meta.about.title": "会社概要 | 株式会社一二一一 — 宿栖東京",
      "meta.about.description": "株式会社一二一一の会社概要、事業内容、住宅宿泊管理業者登録、東京商工会議所会員情報、ブランドの歩みをご紹介します。",
      "meta.privacy.title": "プライバシーポリシー | 株式会社一二一一",
      "meta.privacy.description": "株式会社一二一一のウェブサイトおよびお問い合わせフォームにおける個人情報の取扱いについてご案内します。",
      "a11y.skip": "本文へ移動",
      "a11y.language": "言語を選択",
      "a11y.menu": "メニューを開閉",
      "nav.home": "Home",
      "nav.services": "Services",
      "nav.about": "About",
      "nav.contact": "Contact",
      "nav.book": "Book",
      "footer.privacy": "プライバシーポリシー",
      "footer.designed": "Designed for Tokyo",
      "modal.title": "画像を拡大表示",
      "modal.close": "画像を閉じる",
      "hero.badge": "Established in Tokyo",
      "hero.line1": "東京を、",
      "hero.line2": "もっと自由にもっと特別に",
      "hero.copy": "東京を拠点に、宿泊施設の運営から旅のサポートまで。地域と旅人の双方に寄り添い、安心して選べる東京滞在をつくります。",
      "hero.ctaAbout": "会社情報を見る",
      "hero.ctaBook": "宿泊を予約する",
      "hero.logoAlt": "宿栖東京",
      "philosophy.title": "Brand Philosophy",
      "philosophy.eyebrow": "宿栖東京 ブランド紹介",
      "philosophy.copy": "宿栖東京は、旅先でも自分らしく過ごしたいという願いから生まれました。快適さ、細やかさ、多様性を大切に、空間とサービスの両面から東京での滞在を支えます。",
      "philosophy.fields": "宿泊運営を中心に、旅行・ゲスト支援、メディア・事業支援を展開しています。",
      "philosophy.details": "ブランドと会社について詳しく見る",
      "services.title": "Our Services",
      "services.copy": "東京での滞在と事業を、実務に根ざしたサービスで支援",
      "services.card1Title": "宿泊施設の運営管理",
      "services.card1Body": "東京各地の宿泊施設で、日々の運営、ゲスト対応、品質管理を行います。",
      "services.card2Title": "旅行・ゲストサービス",
      "services.card2Body": "滞在前から滞在中まで、旅程相談や東京での体験づくりをサポートします。",
      "services.card3Title": "メディア・事業支援",
      "services.card3Body": "自社メディアと多言語発信の経験を生かし、コンテンツ制作や事業連携を支援します。",
      "facts.title": "会社情報",
      "facts.item1Title": "2018",
      "facts.item1Body": "株式会社一二一一 設立",
      "facts.item2Title": "Tokyo / Sumida",
      "facts.item2Body": "東京都墨田区を拠点に運営",
      "facts.item3Title": "Registered",
      "facts.item3Body": "住宅宿泊管理業者登録",
      "facts.item4Title": "Tokyo CCI",
      "facts.item4Body": "東京商工会議所 2026年度会員",
      "facts.link": "Aboutへ",
      "social.title": "Social Media",
      "social.wechatAria": "WeChatのQRコードを拡大表示",
      "social.redAria": "RednoteのQRコードを拡大表示",
      "social.douyinAria": "DouyinのQRコードを拡大表示",
      "social.weiboAria": "WeiboのQRコードを拡大表示",
      "social.bilibiliAria": "BilibiliのQRコードを拡大表示",
      "social.youtubeAria": "YouTubeチャンネルを開く",
      "social.qrAlt": "{channel}のQRコード",
      "contact.title": "Contact Us",
      "contact.copy": "ご予約、ご質問、取材、事業連携など。フォームまたはメールよりお問い合わせください。",
      "contact.address": "〒130-0011 東京都墨田区石原2-16-2 宿栖両国A",
      "contact.copyEmail": "メールアドレスをコピー",
      "form.typeLabel": "お問い合わせ種別",
      "form.typePlaceholder": "選択してください",
      "form.typeBooking": "宿泊予約・滞在について",
      "form.typeOperations": "宿泊施設の運営について",
      "form.typeTravel": "旅行・ゲストサービスについて",
      "form.typeMedia": "メディア・取材について",
      "form.typePartnership": "事業連携・その他のご相談",
      "form.nameLabel": "お名前",
      "form.namePlaceholder": "山田 太郎",
      "form.emailLabel": "メールアドレス",
      "form.emailPlaceholder": "name@example.com",
      "form.messageLabel": "お問い合わせ内容",
      "form.messagePlaceholder": "ご相談内容をご記入ください",
      "form.privacyPrefix": "",
      "form.privacyLink": "プライバシーポリシー",
      "form.privacySuffix": "を確認し、個人情報の取扱いに同意します。",
      "form.submit": "送信する",
      "form.sending": "送信中…",
      "form.success": "メッセージを送信しました。担当者よりご連絡します。",
      "form.error": "送信できませんでした。時間をおいて再度お試しいただくか、メールでご連絡ください。",
      "toast.copy": "メールアドレスをコピーしました。",
      "about.hero.badge": "About Us",
      "about.hero.title": "会社概要",
      "about.hero.copy": "宿栖東京ブランドを通じて、東京での滞在と、それを支える事業を丁寧に育てています。",
      "story.title": "Brand Story",
      "story.p1": "2018年の設立以来、宿栖東京は、実用性と心地よさのバランスを大切にしながら、宿泊運営とゲストサービスを改善してきました。",
      "story.p2": "現在は墨田・新宿・台東・中央など、東京のそれぞれに個性がある地域で宿泊施設の運営・管理に携わっています。",
      "story.p3": "短期的な成果だけでなく、施設の品質、地域との関係、継続可能な運営を重視し、パートナーと課題を共有しながら取り組みます。",
      "story.p4": "快適さ、細やかさ、多様性という考え方を、空間づくり、案内、コミュニケーションの一つひとつに反映します。",
      "company.title": "会社情報",
      "company.nameLabel": "会社名",
      "company.enLabel": "英文名",
      "company.foundedLabel": "設立",
      "company.foundedValue": "2018年",
      "company.officeLabel": "本社",
      "company.office": "東京都墨田区",
      "company.brandLabel": "ブランド",
      "company.brandValue": "宿栖東京",
      "business.title": "事業内容",
      "business.item1": "民宿・旅館等の宿泊施設運営管理",
      "business.item2": "旅行・ゲスト向けサービスおよび旅程相談",
      "business.item3": "SNS・コンテンツを活用したメディア運営",
      "business.item4": "宿泊・観光分野における事業支援と連携",
      "business.item5": "海外からの事業・生活に関する一般情報の提供",
      "business.item6": "撮影・多言語コンテンツ制作支援",
      "trust.badge": "Trust & Licenses",
      "trust.title": "会社信頼情報",
      "trust.copy": "会社としての登録・会員情報と、施設ごとの許認可確認方針を、必要な範囲で公開しています。番号と証明画像は一部をマスクしています。",
      "trust.registrationLabel": "Registration",
      "trust.registrationTitle": "住宅宿泊管理業者登録",
      "trust.registrationBody": "当社は住宅宿泊管理業者として登録されています。公開ページでは登録番号の一部をマスクしています。",
      "trust.registrationNumberLabel": "登録番号",
      "trust.registrationNumber": "国土交通大臣（01）第 F06***号",
      "trust.registrationDateLabel": "登録年月日",
      "trust.registrationDate": "令和8年6月9日",
      "trust.registrationValidityLabel": "登録の有効期間",
      "trust.registrationValidity": "令和8年6月10日から令和13年6月9日まで",
      "trust.registrationImageAlt": "住宅宿泊管理業者登録票のマスク済み画像",
      "trust.registrationImageAria": "住宅宿泊管理業者登録票のマスク済み画像を拡大表示",
      "trust.cciLabel": "Membership",
      "trust.cciTitle": "東京商工会議所 2026年度会員",
      "trust.cciBody": "東京商工会議所の2026年度会員として、会員情報を必要な範囲で掲載しています。",
      "trust.cciNumberLabel": "会員番号",
      "trust.cciNumber": "C320****",
      "trust.cciValidityLabel": "会籍期間",
      "trust.cciValidity": "2027年3月まで",
      "trust.cciImageAlt": "東京商工会議所2026年度会員証のマスク済み画像",
      "trust.cciImageAria": "東京商工会議所会員証のマスク済み画像を拡大表示",
      "trust.viewImage": "マスク済み証明画像を確認",
      "trust.facilityLabel": "Facility Licenses",
      "trust.facilityTitle": "施設ごとの許認可確認",
      "trust.facilityBody": "運営・管理する各施設について、施設の形態と所在地に応じて必要となる旅館業営業許可、住宅宿泊事業届出等を施設単位で確認・管理します。",
      "trust.facilityPoint1": "会社ページでは施設単位の証明書を一覧掲載しません。",
      "trust.facilityPoint2": "許可種別、発行機関、番号、状態を施設ごとに管理します。",
      "trust.facilityPoint3": "公開時は必要情報に限定し、番号や画像を適切にマスクします。",
      "journey.title": "Our Journey",
      "journey.item1Title": "2018年 — 会社設立",
      "journey.item1Body": "東京での宿泊体験を支える事業として、株式会社一二一一を設立。",
      "journey.item2Title": "2019年 — ブランド展開",
      "journey.item2Body": "宿栖東京ブランドのもと、宿泊施設の運営とゲスト対応を展開。",
      "journey.item3Title": "2020–2022年 — 運営地域の拡大",
      "journey.item3Body": "東京の複数地域で運営経験を重ね、多様な滞在ニーズへの対応を強化。",
      "journey.item4Title": "2023年 — 支援領域の拡張",
      "journey.item4Body": "旅行支援、メディア運営、事業連携へと対応領域を拡張。",
      "journey.item5Title": "2024–2026年 — 現在",
      "journey.item5Body": "宿泊運営を中核に、サービス品質と運営体制の継続的な改善に取り組んでいます。",
      "values.title": "Core Values",
      "values.item1Title": "快適さ",
      "values.item1Body": "旅の途中でも自然体で過ごせる、清潔で心地よい環境を整えます。",
      "values.item2Title": "細やかさ",
      "values.item2Body": "相手の立場を想像し、案内とコミュニケーションの細部まで丁寧に扱います。",
      "values.item3Title": "多様性",
      "values.item3Body": "文化や旅の目的の違いを尊重し、状況に応じて柔軟に対応します。",
      "cta.title": "Your Tokyo, Thoughtfully Supported",
      "cta.copy": "東京での滞在、取材、事業連携について、お気軽にご相談ください。",
      "cta.contact": "お問い合わせ",
      "cta.book": "宿泊を予約する",
      "privacy.badge": "Privacy",
      "privacy.title": "プライバシーポリシー",
      "privacy.lead": "株式会社一二一一は、当ウェブサイトとお問い合わせフォームで取得する個人情報を、以下の方針に基づいて取り扱います。",
      "privacy.updatedLabel": "制定・最終更新",
      "privacy.updated": "2026年8月12日",
      "privacy.s1Title": "1. 事業者情報",
      "privacy.s1Body": "株式会社一二一一（所在地：〒130-0011 東京都墨田区石原2-16-2 宿栖両国A）が、本サイトで取得する個人情報を管理します。",
      "privacy.s2Title": "2. 取得する情報",
      "privacy.s2Intro": "お問い合わせの際に、次の情報を取得します。",
      "privacy.s2Item1": "氏名、メールアドレス",
      "privacy.s2Item2": "お問い合わせ種別、メッセージに入力された情報",
      "privacy.s2Item3": "フォーム提供事業者がセキュリティ維持のため取得するIPアドレス、ブラウザ情報、アクセス時刻等の技術情報",
      "privacy.s2Note": "フォームには、旅券番号、決済情報、健康情報などの機微な情報を入力しないでください。",
      "privacy.s3Title": "3. 利用目的",
      "privacy.s3Item1": "お問い合わせへの回答、予約・サービス・取材・事業連携に関する連絡",
      "privacy.s3Item2": "本人確認、迷惑行為や不正利用の防止、本サイトと対応品質の改善",
      "privacy.s3Item3": "法令上必要な記録の保存、紛争や権利侵害への対応",
      "privacy.s4Title": "4. 外部サービスおよび国外での取扱い",
      "privacy.s4Body": "お問い合わせフォームにはFormspree, Inc.のサービスを利用します。送信内容と技術情報は、フォーム送信、迷惑送信対策、通知等のため同社によって処理され、米国その他の同社が業務を行う国で取り扱われる場合があります。",
      "privacy.s4Link": "Formspreeのプライバシーポリシー",
      "privacy.s5Title": "5. 第三者提供",
      "privacy.s5Body": "法令に基づく場合、人の生命・身体・財産の保護に必要な場合、または利用目的の達成に必要な範囲で委託先を利用する場合を除き、本人の同意なく個人データを第三者へ提供しません。専門家との連携が必要な相談では、共有する内容と相手を確認したうえで必要な情報のみを取り扱います。",
      "privacy.s6Title": "6. 安全管理",
      "privacy.s6Body": "取得する情報へのアクセスを業務上必要な範囲に限定し、漏えい、紛失、不正アクセス等を防ぐため、組織的・人的・技術的に合理的な安全管理措置を講じます。",
      "privacy.s7Title": "7. 保存期間",
      "privacy.s7Body": "取得した情報は、お問い合わせへの対応、取引記録、法令遵守、紛争対応に必要な期間に限って保存し、利用する必要がなくなった情報は適切な方法で削除または匿名化します。",
      "privacy.s8Title": "8. 開示、訂正、削除等",
      "privacy.s8Body": "ご本人から、当社が保有する個人データの利用目的の通知、開示、訂正、追加、削除、利用停止、消去等のご希望があった場合は、ご本人であることを確認したうえで、法令に従い対応します。",
      "privacy.s9Title": "9. お問い合わせ窓口",
      "privacy.s9Body": "個人情報の取扱いに関するお問い合わせは、次のメールアドレスまでご連絡ください。",
      "privacy.s10Title": "10. 方針の変更",
      "privacy.s10Body": "法令、サービス内容または取扱状況の変更に応じて本方針を見直すことがあります。重要な変更がある場合は、本ページでお知らせします。"
    },
    zh: {
      "meta.home.title": "株式会社一二一一 | 宿栖东京 — 东京住宿运营与旅行服务",
      "meta.home.description": "株式会社一二一一通过宿栖东京品牌，提供东京住宿设施运营、旅客与旅行支持，以及媒体和商务协作服务。",
      "meta.about.title": "公司概要 | 株式会社一二一一 — 宿栖东京",
      "meta.about.description": "了解株式会社一二一一的公司信息、业务内容、住宅宿泊管理业者登记、东京商工会议所会员信息与品牌历程。",
      "meta.privacy.title": "隐私政策 | 株式会社一二一一",
      "meta.privacy.description": "说明株式会社一二一一如何处理公司网站和联系表单所收集的个人信息。",
      "a11y.skip": "跳至正文",
      "a11y.language": "选择语言",
      "a11y.menu": "打开或关闭菜单",
      "nav.home": "首页",
      "nav.services": "服务",
      "nav.about": "关于我们",
      "nav.contact": "联系",
      "nav.book": "预订",
      "footer.privacy": "隐私政策",
      "footer.designed": "Designed for Tokyo",
      "modal.title": "放大查看图片",
      "modal.close": "关闭图片",
      "hero.badge": "东京本地运营",
      "hero.line1": "让东京之旅，",
      "hero.line2": "更自由也更特别",
      "hero.copy": "立足东京，从住宿运营到旅行支持。我们关注旅客与社区的真实需求，打造安心、舒适且值得信赖的东京停留体验。",
      "hero.ctaAbout": "查看公司信息",
      "hero.ctaBook": "预订住宿",
      "hero.logoAlt": "宿栖东京",
      "philosophy.title": "品牌理念",
      "philosophy.eyebrow": "宿栖东京 品牌介绍",
      "philosophy.copy": "宿栖东京源于旅客希望在异地也能自在生活的朴素愿望。我们重视舒适、细致和多样性，从空间与服务两方面支持每一次东京停留。",
      "philosophy.fields": "以住宿运营为核心，同时提供旅行与旅客支持、媒体与商务协作服务。",
      "philosophy.details": "进一步了解品牌与公司",
      "services.title": "我们的服务",
      "services.copy": "以扎实的运营经验，支持您在东京的停留与事业",
      "services.card1Title": "住宿设施运营管理",
      "services.card1Body": "在东京多地为住宿设施提供日常运营、旅客沟通与质量管理。",
      "services.card2Title": "旅行与旅客服务",
      "services.card2Body": "从出发前到停留期间，为旅客提供行程咨询和东京体验支持。",
      "services.card3Title": "媒体与商务支持",
      "services.card3Body": "结合自有媒体和多语言传播经验，支持内容制作、品牌传播与业务协作。",
      "facts.title": "公司信息",
      "facts.item1Title": "2018",
      "facts.item1Body": "株式会社一二一一成立",
      "facts.item2Title": "东京 / 墨田",
      "facts.item2Body": "以东京都墨田区为运营基地",
      "facts.item3Title": "已登记",
      "facts.item3Body": "住宅宿泊管理业者登记",
      "facts.item4Title": "东京商工会议所",
      "facts.item4Body": "2026年度会员",
      "facts.link": "查看 About",
      "social.title": "社交媒体",
      "social.wechatAria": "放大查看微信二维码",
      "social.redAria": "放大查看小红书二维码",
      "social.douyinAria": "放大查看抖音二维码",
      "social.weiboAria": "放大查看微博二维码",
      "social.bilibiliAria": "放大查看哔哩哔哩二维码",
      "social.youtubeAria": "打开YouTube频道",
      "social.qrAlt": "{channel}二维码",
      "contact.title": "联系我们",
      "contact.copy": "住宿预订、一般咨询、媒体采访或业务合作，欢迎通过表单或邮件联系。",
      "contact.address": "〒130-0011 东京都墨田区石原2-16-2 宿栖两国A",
      "contact.copyEmail": "复制邮箱地址",
      "form.typeLabel": "咨询类型",
      "form.typePlaceholder": "请选择",
      "form.typeBooking": "住宿预订与入住咨询",
      "form.typeOperations": "住宿设施运营咨询",
      "form.typeTravel": "旅行与旅客服务咨询",
      "form.typeMedia": "媒体与采访咨询",
      "form.typePartnership": "业务合作及其他咨询",
      "form.nameLabel": "姓名",
      "form.namePlaceholder": "您的姓名",
      "form.emailLabel": "邮箱地址",
      "form.emailPlaceholder": "name@example.com",
      "form.messageLabel": "咨询内容",
      "form.messagePlaceholder": "请填写您的需求",
      "form.privacyPrefix": "我已阅读",
      "form.privacyLink": "隐私政策",
      "form.privacySuffix": "，并同意个人信息的处理方式。",
      "form.submit": "发送",
      "form.sending": "正在发送…",
      "form.success": "消息已发送，我们会尽快与您联系。",
      "form.error": "发送失败。请稍后重试，或直接通过邮件联系我们。",
      "toast.copy": "邮箱地址已复制。",
      "about.hero.badge": "About Us",
      "about.hero.title": "公司概要",
      "about.hero.copy": "通过宿栖东京品牌，我们持续完善东京住宿体验以及支持这些体验的各项业务。",
      "story.title": "品牌故事",
      "story.p1": "自2018年成立以来，宿栖东京始终重视实用性与舒适感的平衡，并持续改善住宿运营和旅客服务。",
      "story.p2": "目前，我们在墨田、新宿、台东、中央等各具特色的东京区域参与住宿设施的运营与管理。",
      "story.p3": "我们不只关注短期成果，也重视设施品质、社区关系和可持续运营，并与合作伙伴共同面对实际问题。",
      "story.p4": "我们将舒适、细致和多样性的理念落实到空间、指引和每一次沟通中。",
      "company.title": "公司信息",
      "company.nameLabel": "公司名",
      "company.enLabel": "英文名",
      "company.foundedLabel": "成立",
      "company.foundedValue": "2018年",
      "company.officeLabel": "总部",
      "company.office": "东京都墨田区",
      "company.brandLabel": "品牌",
      "company.brandValue": "宿栖东京",
      "business.title": "业务内容",
      "business.item1": "民宿、旅馆等住宿设施运营管理",
      "business.item2": "旅行与旅客服务及行程咨询",
      "business.item3": "使用SNS与内容的自媒体运营",
      "business.item4": "住宿和旅游领域的商务支持与合作",
      "business.item5": "面向海外人士的日本事业与生活一般信息",
      "business.item6": "摄影与多语言内容制作支持",
      "trust.badge": "资质与登记",
      "trust.title": "公司可信信息",
      "trust.copy": "我们在必要范围内公开公司登记、会员信息和各设施的许可确认原则，编号与证明图片均做部分打码。",
      "trust.registrationLabel": "登记信息",
      "trust.registrationTitle": "住宅宿泊管理业者登记",
      "trust.registrationBody": "本公司已登记为住宅宿泊管理业者，公开页面仅展示部分打码后的登记编号。",
      "trust.registrationNumberLabel": "登记编号",
      "trust.registrationNumber": "国土交通大臣（01）第 F06***号",
      "trust.registrationDateLabel": "登记日期",
      "trust.registrationDate": "令和8年6月9日",
      "trust.registrationValidityLabel": "有效期间",
      "trust.registrationValidity": "令和8年6月10日至令和13年6月9日",
      "trust.registrationImageAlt": "已打码的住宅宿泊管理业者登记证明图片",
      "trust.registrationImageAria": "放大查看已打码的住宅宿泊管理业者登记证明",
      "trust.cciLabel": "会员信息",
      "trust.cciTitle": "东京商工会议所 2026年度会员",
      "trust.cciBody": "本公司为东京商工会议所2026年度会员，并在必要范围内公开会员信息。",
      "trust.cciNumberLabel": "会员编号",
      "trust.cciNumber": "C320****",
      "trust.cciValidityLabel": "会籍期间",
      "trust.cciValidity": "至2027年3月",
      "trust.cciImageAlt": "已打码的东京商工会议所2026年度会员证图片",
      "trust.cciImageAria": "放大查看已打码的东京商工会议所会员证",
      "trust.viewImage": "查看已打码的证明图片",
      "trust.facilityLabel": "单设施许可",
      "trust.facilityTitle": "逐一确认各设施许可",
      "trust.facilityBody": "对于运营或管理的各项设施，我们会根据设施类型和所在地，逐一确认并管理所需的旅馆业营业许可、住宅宿泊事业届出等信息。",
      "trust.facilityPoint1": "公司页面不集中公开每个设施的全部证明文件。",
      "trust.facilityPoint2": "按设施管理许可类型、发证机关、编号与状态。",
      "trust.facilityPoint3": "公开时仅展示必要信息，并适当遮盖编号和图片。",
      "journey.title": "发展历程",
      "journey.item1Title": "2018年 — 公司成立",
      "journey.item1Body": "株式会社一二一一成立，开始发展支持东京住宿体验的业务。",
      "journey.item2Title": "2019年 — 品牌发展",
      "journey.item2Body": "以宿栖东京品牌开展住宿设施运营与旅客服务。",
      "journey.item3Title": "2020–2022年 — 运营区域扩大",
      "journey.item3Body": "在东京多个区域积累运营经验，加强对多样化住宿需求的支持。",
      "journey.item4Title": "2023年 — 服务领域扩展",
      "journey.item4Body": "逐步扩展至旅行支持、媒体运营和业务协作。",
      "journey.item5Title": "2024–2026年 — 现在",
      "journey.item5Body": "以住宿运营为核心，持续改善服务品质和运营体系。",
      "values.title": "核心价值",
      "values.item1Title": "舒适",
      "values.item1Body": "提供清洁、安心的环境，让旅客在途中也能自然放松。",
      "values.item2Title": "细致",
      "values.item2Body": "站在对方立场思考，认真对待指引、沟通和服务细节。",
      "values.item3Title": "多样",
      "values.item3Body": "尊重文化与出行目的的差异，根据实际情况灵活应对。",
      "cta.title": "用心支持您的东京体验",
      "cta.copy": "有关东京住宿、媒体采访或业务合作，欢迎与我们联系。",
      "cta.contact": "联系我们",
      "cta.book": "预订住宿",
      "privacy.badge": "Privacy",
      "privacy.title": "隐私政策",
      "privacy.lead": "株式会社一二一一将依据以下方针处理通过本网站和联系表单收集的个人信息。",
      "privacy.updatedLabel": "制定及最后更新",
      "privacy.updated": "2026年8月12日",
      "privacy.s1Title": "1. 运营主体",
      "privacy.s1Body": "株式会社一二一一（地址：〒130-0011 东京都墨田区石原2-16-2 宿栖两国A）负责管理本网站所收集的个人信息。",
      "privacy.s2Title": "2. 收集的信息",
      "privacy.s2Intro": "您提交咨询时，我们会收集以下信息。",
      "privacy.s2Item1": "姓名、邮箱地址",
      "privacy.s2Item2": "咨询类型以及您在留言中填写的信息",
      "privacy.s2Item3": "表单服务商为保障安全而收集的IP地址、浏览器信息、访问时间等技术信息",
      "privacy.s2Note": "请勿在表单中填写护照号码、支付信息、健康信息等敏感信息。",
      "privacy.s3Title": "3. 使用目的",
      "privacy.s3Item1": "回复咨询，并就预订、服务、采访或业务合作进行联系",
      "privacy.s3Item2": "身份确认、防止垃圾信息与滥用，以及改善网站和沟通品质",
      "privacy.s3Item3": "保存法律要求的记录，并应对纠纷或权利侵害",
      "privacy.s4Title": "4. 外部服务与境外处理",
      "privacy.s4Body": "本网站联系表单使用Formspree, Inc.提供的服务。您提交的内容和相关技术信息可能由该公司用于表单传输、垃圾信息防护和通知，并可能在美国或该公司开展业务的其他国家进行处理。",
      "privacy.s4Link": "Formspree隐私政策",
      "privacy.s5Title": "5. 向第三方提供信息",
      "privacy.s5Body": "除法律要求、保护生命身体财产所必需，或在实现上述使用目的所需范围内使用受托服务商的情况外，未经本人同意，我们不会向第三方提供个人数据。如咨询需要与专业人士协作，我们会先确认共享对象和内容，仅处理必要的信息。",
      "privacy.s6Title": "6. 安全管理",
      "privacy.s6Body": "我们仅允许业务所需人员接触相关信息，并采取合理的组织、人员和技术措施，防止泄露、遗失和未经授权的访问。",
      "privacy.s7Title": "7. 保存期限",
      "privacy.s7Body": "我们仅在回复咨询、保留交易记录、遵守法律和处理纠纷所需的期间保存信息，不再需要的信息会以适当方式删除或匿名化。",
      "privacy.s8Title": "8. 查阅、更正与删除等请求",
      "privacy.s8Body": "如本人希望了解使用目的，或要求查阅、更正、补充、删除、停止使用或销毁本公司持有的个人数据，我们会在确认本人身份后依法处理。",
      "privacy.s9Title": "9. 联系方式",
      "privacy.s9Body": "如对个人信息处理有任何疑问，请通过以下邮箱联系我们。",
      "privacy.s10Title": "10. 政策变更",
      "privacy.s10Body": "我们可能根据法律、服务内容或实际处理方式的变化更新本政策。如有重要变更，将在本页面发布。"
    },
    en: {
      "meta.home.title": "1211 Co., Ltd. | Shukusei Tokyo — Stays and Travel Services",
      "meta.home.description": "1211 Co., Ltd. operates Shukusei Tokyo, supporting accommodation operations, guest travel, media, and business collaboration across Tokyo.",
      "meta.about.title": "About | 1211 Co., Ltd. — Shukusei Tokyo",
      "meta.about.description": "Learn about 1211 Co., Ltd., our services, accommodation-management registration, Tokyo Chamber of Commerce membership, and company journey.",
      "meta.privacy.title": "Privacy Policy | 1211 Co., Ltd.",
      "meta.privacy.description": "How 1211 Co., Ltd. handles personal information collected through this website and its contact form.",
      "a11y.skip": "Skip to main content",
      "a11y.language": "Select language",
      "a11y.menu": "Open or close menu",
      "nav.home": "Home",
      "nav.services": "Services",
      "nav.about": "About",
      "nav.contact": "Contact",
      "nav.book": "Book",
      "footer.privacy": "Privacy Policy",
      "footer.designed": "Designed for Tokyo",
      "modal.title": "Enlarged image",
      "modal.close": "Close image",
      "hero.badge": "Established in Tokyo",
      "hero.line1": "Tokyo,",
      "hero.line2": "made freer and more personal",
      "hero.copy": "Based in Tokyo, we support every part of a stay—from accommodation operations to local travel assistance—with care for both guests and the neighborhoods they visit.",
      "hero.ctaAbout": "About the Company",
      "hero.ctaBook": "Book a Stay",
      "hero.logoAlt": "Shukusei Tokyo",
      "philosophy.title": "Brand Philosophy",
      "philosophy.eyebrow": "Introducing Shukusei Tokyo",
      "philosophy.copy": "Shukusei Tokyo began with a simple wish: to help travelers feel at ease and themselves, even away from home. We support Tokyo stays through comfort, attentive service, and flexibility.",
      "philosophy.fields": "Accommodation operations are at our core, supported by guest travel, media, and business collaboration services.",
      "philosophy.details": "Learn more about our brand and company",
      "services.title": "Our Services",
      "services.copy": "Practical support for stays and business in Tokyo",
      "services.card1Title": "Accommodation Operations",
      "services.card1Body": "Day-to-day operations, guest communication, and quality management for accommodations across Tokyo.",
      "services.card2Title": "Guest & Travel Support",
      "services.card2Body": "Itinerary guidance and local support before and during a guest's stay in Tokyo.",
      "services.card3Title": "Media & Business Support",
      "services.card3Body": "Content production and collaboration informed by our owned-media and multilingual communication experience.",
      "facts.title": "Company",
      "facts.item1Title": "2018",
      "facts.item1Body": "1211 Co., Ltd. established",
      "facts.item2Title": "Tokyo / Sumida",
      "facts.item2Body": "Operations based in Sumida, Tokyo",
      "facts.item3Title": "Registered",
      "facts.item3Body": "Private Lodging Administration Business",
      "facts.item4Title": "Tokyo CCI",
      "facts.item4Body": "FY2026 member",
      "facts.link": "View About",
      "social.title": "Social Media",
      "social.wechatAria": "Enlarge the WeChat QR code",
      "social.redAria": "Enlarge the Rednote QR code",
      "social.douyinAria": "Enlarge the Douyin QR code",
      "social.weiboAria": "Enlarge the Weibo QR code",
      "social.bilibiliAria": "Enlarge the Bilibili QR code",
      "social.youtubeAria": "Open the YouTube channel",
      "social.qrAlt": "{channel} QR code",
      "contact.title": "Contact Us",
      "contact.copy": "For reservations, general questions, media inquiries, or business collaboration, contact us by form or email.",
      "contact.address": "Shukusei Ryogoku A, 2-16-2 Ishiwara, Sumida-ku, Tokyo 130-0011",
      "contact.copyEmail": "Copy email address",
      "form.typeLabel": "Inquiry type",
      "form.typePlaceholder": "Please select",
      "form.typeBooking": "Booking or stay inquiry",
      "form.typeOperations": "Accommodation operations",
      "form.typeTravel": "Guest or travel services",
      "form.typeMedia": "Media or interview inquiry",
      "form.typePartnership": "Partnership or other inquiry",
      "form.nameLabel": "Name",
      "form.namePlaceholder": "Your name",
      "form.emailLabel": "Email address",
      "form.emailPlaceholder": "name@example.com",
      "form.messageLabel": "Message",
      "form.messagePlaceholder": "How can we help?",
      "form.privacyPrefix": "I have read the ",
      "form.privacyLink": "Privacy Policy",
      "form.privacySuffix": " and agree to the handling of my personal information.",
      "form.submit": "Send Message",
      "form.sending": "Sending…",
      "form.success": "Your message has been sent. We will be in touch.",
      "form.error": "We could not send your message. Please try again later or contact us by email.",
      "toast.copy": "Email address copied.",
      "about.hero.badge": "About Us",
      "about.hero.title": "Company Overview",
      "about.hero.copy": "Through Shukusei Tokyo, we continue to improve Tokyo stays and the services that support them.",
      "story.title": "Brand Story",
      "story.p1": "Since our establishment in 2018, Shukusei Tokyo has continued to improve accommodation operations and guest services while balancing practicality and comfort.",
      "story.p2": "Today, we take part in operating and managing accommodations in distinctive Tokyo areas including Sumida, Shinjuku, Taito, and Chuo.",
      "story.p3": "We look beyond short-term results to property quality, community relationships, and sustainable operations, working through practical issues together with our partners.",
      "story.p4": "Comfort, attentiveness, and diversity guide how we shape spaces, provide information, and communicate with every guest.",
      "company.title": "Company Information",
      "company.nameLabel": "Company",
      "company.enLabel": "English name",
      "company.foundedLabel": "Established",
      "company.foundedValue": "2018",
      "company.officeLabel": "Head office",
      "company.office": "Sumida, Tokyo",
      "company.brandLabel": "Brand",
      "company.brandValue": "Shukusei Tokyo",
      "business.title": "Business Areas",
      "business.item1": "Operation and management of accommodations",
      "business.item2": "Guest services, travel support, and itinerary guidance",
      "business.item3": "Owned-media, social, and content operations",
      "business.item4": "Business support and collaboration in lodging and tourism",
      "business.item5": "General information for overseas clients on business and life in Japan",
      "business.item6": "Photography and multilingual content support",
      "trust.badge": "Trust & Licenses",
      "trust.title": "Company Credentials",
      "trust.copy": "We publish relevant company registration, membership information, and our approach to facility-level licensing. Identifiers and certificate images are partially masked.",
      "trust.registrationLabel": "Registration",
      "trust.registrationTitle": "Private Lodging Administration Business",
      "trust.registrationBody": "The company is registered as a Private Lodging Administrator. Part of the registration number is masked on this public page.",
      "trust.registrationNumberLabel": "Registration no.",
      "trust.registrationNumber": "Minister of Land, Infrastructure, Transport and Tourism (01) F06***",
      "trust.registrationDateLabel": "Registration date",
      "trust.registrationDate": "June 9, 2026",
      "trust.registrationValidityLabel": "Valid through",
      "trust.registrationValidity": "June 10, 2026 to June 9, 2031",
      "trust.registrationImageAlt": "Masked Private Lodging Administrator registration certificate",
      "trust.registrationImageAria": "Enlarge the masked lodging administrator registration certificate",
      "trust.cciLabel": "Membership",
      "trust.cciTitle": "Tokyo Chamber of Commerce and Industry FY2026 Member",
      "trust.cciBody": "We publish relevant membership information as a FY2026 member of the Tokyo Chamber of Commerce and Industry.",
      "trust.cciNumberLabel": "Membership no.",
      "trust.cciNumber": "C320****",
      "trust.cciValidityLabel": "Membership period",
      "trust.cciValidity": "Through March 2027",
      "trust.cciImageAlt": "Masked Tokyo Chamber of Commerce and Industry FY2026 membership certificate",
      "trust.cciImageAria": "Enlarge the masked Tokyo Chamber of Commerce membership certificate",
      "trust.viewImage": "View masked certificate image",
      "trust.facilityLabel": "Facility Licenses",
      "trust.facilityTitle": "Facility-by-facility review",
      "trust.facilityBody": "For each property we operate or manage, we review and maintain the applicable hotel-business license, private-lodging notification, or other requirement based on its type and location.",
      "trust.facilityPoint1": "Facility certificates are not listed in bulk on the company page.",
      "trust.facilityPoint2": "License type, issuer, identifier, and status are maintained by facility.",
      "trust.facilityPoint3": "Only necessary information is published, with identifiers and images appropriately masked.",
      "journey.title": "Our Journey",
      "journey.item1Title": "2018 — Company established",
      "journey.item1Body": "1211 Co., Ltd. was established to support better accommodation experiences in Tokyo.",
      "journey.item2Title": "2019 — Brand development",
      "journey.item2Body": "Accommodation operations and guest support developed under the Shukusei Tokyo brand.",
      "journey.item3Title": "2020–2022 — Operating reach",
      "journey.item3Body": "We gained experience across multiple Tokyo areas and strengthened support for different stay needs.",
      "journey.item4Title": "2023 — Broader support",
      "journey.item4Body": "Our work expanded to travel support, media operations, and business collaboration.",
      "journey.item5Title": "2024–2026 — Today",
      "journey.item5Body": "With accommodation operations at our core, we continue improving service quality and operating systems.",
      "values.title": "Core Values",
      "values.item1Title": "Comfort",
      "values.item1Body": "Clean, reassuring spaces where guests can relax and feel like themselves.",
      "values.item2Title": "Attentiveness",
      "values.item2Body": "Thoughtful guidance, communication, and service details from the guest's perspective.",
      "values.item3Title": "Diversity",
      "values.item3Body": "Respect for different cultures and travel purposes, with flexibility for each situation.",
      "cta.title": "Your Tokyo, Thoughtfully Supported",
      "cta.copy": "Talk to us about a Tokyo stay, media inquiry, or business collaboration.",
      "cta.contact": "Contact Us",
      "cta.book": "Book a Stay",
      "privacy.badge": "Privacy",
      "privacy.title": "Privacy Policy",
      "privacy.lead": "1211 Co., Ltd. handles personal information collected through this website and its contact form in accordance with this policy.",
      "privacy.updatedLabel": "Effective and last updated",
      "privacy.updated": "August 12, 2026",
      "privacy.s1Title": "1. Who is responsible",
      "privacy.s1Body": "1211 Co., Ltd. (Shukusei Ryogoku A, 2-16-2 Ishiwara, Sumida-ku, Tokyo 130-0011, Japan) is responsible for personal information collected through this website.",
      "privacy.s2Title": "2. Information we collect",
      "privacy.s2Intro": "When you contact us, we collect the following information:",
      "privacy.s2Item1": "Your name and email address",
      "privacy.s2Item2": "Your inquiry type and information included in your message",
      "privacy.s2Item3": "Technical information collected by the form provider for security, such as IP address, browser information, and access time",
      "privacy.s2Note": "Please do not enter sensitive information such as passport numbers, payment information, or health information in the form.",
      "privacy.s3Title": "3. How we use information",
      "privacy.s3Item1": "To respond and communicate about reservations, services, media inquiries, or business collaboration",
      "privacy.s3Item2": "To verify identity, prevent spam and misuse, and improve our website and response quality",
      "privacy.s3Item3": "To retain records required by law and respond to disputes or infringements",
      "privacy.s4Title": "4. External service and international processing",
      "privacy.s4Body": "Our contact form uses services provided by Formspree, Inc. Submission content and technical information may be processed by Formspree for form delivery, spam prevention, and notifications, and may be handled in the United States or other countries where Formspree operates.",
      "privacy.s4Link": "Formspree Privacy Policy",
      "privacy.s5Title": "5. Sharing with third parties",
      "privacy.s5Body": "We do not provide personal data to third parties without consent, except where required by law, necessary to protect life, health, or property, or where service providers are used as necessary for the purposes above. When professional coordination is needed, we confirm what and with whom information will be shared and handle only what is necessary.",
      "privacy.s6Title": "6. Security",
      "privacy.s6Body": "Access is limited to those who need it for their work. We take reasonable organizational, personnel, and technical measures to prevent leaks, loss, and unauthorized access.",
      "privacy.s7Title": "7. Retention",
      "privacy.s7Body": "We retain information only as long as necessary to respond, maintain transaction records, comply with law, or address disputes. Information no longer needed is deleted or anonymized appropriately.",
      "privacy.s8Title": "8. Access, correction, and deletion",
      "privacy.s8Body": "If you request notice of purpose, access, correction, addition, deletion, suspension of use, or erasure of personal data we hold about you, we will verify your identity and respond in accordance with applicable law.",
      "privacy.s9Title": "9. Contact",
      "privacy.s9Body": "For questions about our handling of personal information, contact us at the email address below.",
      "privacy.s10Title": "10. Changes to this policy",
      "privacy.s10Body": "We may review this policy as laws, services, or handling practices change. Material changes will be announced on this page."
    }
  };

  let currentLanguage = "ja";
  let toastTimer;
  let activeModal = null;
  let modalReturnFocus = null;

  function getTranslation(key, lang = currentLanguage) {
    return translations[lang]?.[key] ?? translations.ja[key] ?? "";
  }

  function replaceChannelToken(value, element) {
    const channel = element.dataset.channel || "";
    return value.replace("{channel}", channel);
  }

  function applyLanguage(requestedLanguage, options = {}) {
    const lang = SUPPORTED_LANGUAGES.includes(requestedLanguage) ? requestedLanguage : "ja";
    currentLanguage = lang;
    document.documentElement.lang = lang === "zh" ? "zh-Hans" : lang;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = getTranslation(element.dataset.i18n, lang);
      if (value) element.textContent = replaceChannelToken(value, element);
    });

    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      const value = getTranslation(element.dataset.i18nHtml, lang);
      if (value) element.innerHTML = value;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const value = getTranslation(element.dataset.i18nPlaceholder, lang);
      if (value) element.setAttribute("placeholder", value);
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
      const value = getTranslation(element.dataset.i18nAria, lang);
      if (value) element.setAttribute("aria-label", replaceChannelToken(value, element));
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
      const value = getTranslation(element.dataset.i18nAlt, lang);
      if (value) element.setAttribute("alt", replaceChannelToken(value, element));
    });

    document.querySelectorAll("[data-lang]").forEach((button) => {
      const isActive = button.dataset.lang === lang;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    const languageField = document.querySelector('input[name="_language"]');
    if (languageField) languageField.value = lang;

    const page = document.body.dataset.page;
    const title = getTranslation(`meta.${page}.title`, lang);
    const description = getTranslation(`meta.${page}.description`, lang);
    if (title) document.title = title;
    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta && description) descriptionMeta.setAttribute("content", description);

    if (options.persist !== false) {
      try {
        localStorage.setItem(LANGUAGE_KEY, lang);
      } catch (_) {
        // Language switching still works when storage is unavailable.
      }
    }
  }

  function getStoredLanguage() {
    try {
      const stored = localStorage.getItem(LANGUAGE_KEY);
      return SUPPORTED_LANGUAGES.includes(stored) ? stored : "ja";
    } catch (_) {
      return "ja";
    }
  }

  function showToast(message, type = "success") {
    const toast = document.getElementById("toast");
    if (!toast) return;
    window.clearTimeout(toastTimer);
    toast.textContent = message;
    toast.className = `toast show${type === "error" ? " error" : ""}`;
    toastTimer = window.setTimeout(() => toast.classList.remove("show"), 4200);
  }

  function setupLanguageSwitches() {
    document.querySelectorAll("[data-lang]").forEach((button) => {
      button.addEventListener("click", () => applyLanguage(button.dataset.lang));
    });
  }

  function setupMenu() {
    const button = document.getElementById("menu-btn");
    const menu = document.getElementById("mobile-menu");
    if (!button || !menu) return;

    const closeMenu = () => {
      menu.classList.remove("open");
      button.classList.remove("menu-open");
      button.setAttribute("aria-expanded", "false");
    };

    button.addEventListener("click", () => {
      const nextOpen = !menu.classList.contains("open");
      menu.classList.toggle("open", nextOpen);
      button.classList.toggle("menu-open", nextOpen);
      button.setAttribute("aria-expanded", String(nextOpen));
    });
    menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && menu.classList.contains("open")) {
        closeMenu();
        button.focus();
      }
    });
  }

  function setupNavbar() {
    const navbar = document.getElementById("navbar");
    if (!navbar) return;
    const update = () => navbar.classList.toggle("shadow-sm", window.scrollY > 40);
    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  function setupReveal() {
    const elements = document.querySelectorAll(".reveal");
    if (!elements.length) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("active"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    elements.forEach((element) => observer.observe(element));
  }

  function closeModal() {
    if (!activeModal) return;
    const modal = activeModal;
    modal.classList.remove("is-open");
    document.body.classList.remove("overflow-hidden");
    window.setTimeout(() => {
      modal.hidden = true;
      const image = modal.querySelector("[data-modal-image]");
      if (image) image.removeAttribute("src");
    }, 220);
    activeModal = null;
    if (modalReturnFocus && document.contains(modalReturnFocus)) modalReturnFocus.focus();
    modalReturnFocus = null;
  }

  function openModal(trigger) {
    const modal = document.getElementById("image-modal");
    if (!modal) return;
    const image = modal.querySelector("[data-modal-image]");
    if (!image) return;
    image.src = trigger.dataset.lightboxSrc;
    image.alt = replaceChannelToken(getTranslation(trigger.dataset.lightboxAltKey), trigger) || trigger.dataset.channel || "";
    modalReturnFocus = trigger;
    activeModal = modal;
    modal.hidden = false;
    document.body.classList.add("overflow-hidden");
    window.requestAnimationFrame(() => modal.classList.add("is-open"));
    modal.querySelector("[data-modal-close]")?.focus();
  }

  function setupModals() {
    document.querySelectorAll("[data-lightbox-src]").forEach((button) => {
      button.addEventListener("click", () => openModal(button));
    });
    const modal = document.getElementById("image-modal");
    if (!modal) return;
    modal.querySelectorAll("[data-modal-close]").forEach((button) => button.addEventListener("click", closeModal));
    modal.addEventListener("click", (event) => {
      if (event.target === modal) closeModal();
    });
    modal.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeModal();
        return;
      }
      if (event.key !== "Tab") return;
      const focusable = [...modal.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])')]
        .filter((element) => !element.hasAttribute("disabled"));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });
  }

  function setupCopyButtons() {
    document.querySelectorAll("[data-copy-target]").forEach((button) => {
      button.addEventListener("click", async () => {
        const target = document.querySelector(button.dataset.copyTarget);
        if (!target) return;
        const text = target.textContent.trim();
        try {
          await navigator.clipboard.writeText(text);
        } catch (_) {
          const temporary = document.createElement("textarea");
          temporary.value = text;
          temporary.style.position = "fixed";
          temporary.style.left = "-9999px";
          document.body.appendChild(temporary);
          temporary.select();
          document.execCommand("copy");
          temporary.remove();
        }
        showToast(getTranslation("toast.copy"));
      });
    });
  }

  function setupForm() {
    const form = document.getElementById("contactForm");
    const button = document.getElementById("submitBtn");
    const status = document.getElementById("formStatus");
    if (!form || !button || !status) return;

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      button.disabled = true;
      button.textContent = getTranslation("form.sending");
      status.textContent = "";

      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" }
        });
        if (!response.ok) throw new Error("Form submission failed");
        form.reset();
        const languageField = form.querySelector('input[name="_language"]');
        if (languageField) languageField.value = currentLanguage;
        status.textContent = getTranslation("form.success");
        showToast(getTranslation("form.success"));
      } catch (_) {
        status.textContent = getTranslation("form.error");
        showToast(getTranslation("form.error"), "error");
      } finally {
        button.disabled = false;
        button.textContent = getTranslation("form.submit");
      }
    });
  }

  function setupYear() {
    document.querySelectorAll("[data-current-year]").forEach((element) => {
      element.textContent = new Date().getFullYear();
    });
  }

  document.documentElement.classList.add("js");
  document.addEventListener("DOMContentLoaded", () => {
    applyLanguage(getStoredLanguage(), { persist: false });
    setupLanguageSwitches();
    setupMenu();
    setupNavbar();
    setupReveal();
    setupModals();
    setupCopyButtons();
    setupForm();
    setupYear();
  });

  window.SiteUI = Object.freeze({
    applyLanguage,
    getLanguage: () => currentLanguage,
    supportedLanguages: [...SUPPORTED_LANGUAGES]
  });
})();
