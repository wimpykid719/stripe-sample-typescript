"use strict";
// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var stripe_1 = __importDefault(require("stripe"));
var express_1 = __importDefault(require("express"));
var stripe = new stripe_1.default('sk_test_09l3shTSTKHYCzzZZsiLl2vA', { apiVersion: '2020-08-27' });
var app = (0, express_1.default)();
app.use(express_1.default.static('public'));
app.use(express_1.default.json());
// オーダの金額を計算するコードを書く
var calculateOrderAmount = function (items) {
    var amount = items;
    // ここで計算する処理を書く
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return 1400;
};
app.post('/create-payment-intent', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var items, paymentIntent;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                items = req.body.items;
                return [4 /*yield*/, stripe.paymentIntents.create({
                        amount: calculateOrderAmount(items),
                        currency: 'usd',
                    })];
            case 1:
                paymentIntent = _a.sent();
                res.send({
                    clientSecret: paymentIntent.client_secret,
                });
                return [2 /*return*/];
        }
    });
}); });
app.listen(4242, function () {
    console.log('Running on port 4242');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxpRkFBaUY7QUFDakYsMkRBQTJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzRCxrREFBMkI7QUFDM0Isb0RBQTZCO0FBRTdCLElBQU0sTUFBTSxHQUFHLElBQUksZ0JBQU0sQ0FBQyxrQ0FBa0MsRUFBRSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFBO0FBRTNGLElBQU0sR0FBRyxHQUFHLElBQUEsaUJBQU8sR0FBRSxDQUFBO0FBRXJCLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtBQUNqQyxHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQTtBQUV2QixvQkFBb0I7QUFDcEIsSUFBTSxvQkFBb0IsR0FBRyxVQUFDLEtBQVk7SUFDeEMsSUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFBO0lBQ3BCLGVBQWU7SUFDZixpRUFBaUU7SUFDakUscURBQXFEO0lBQ3JELDZEQUE2RDtJQUM3RCxPQUFPLElBQUksQ0FBQTtBQUNiLENBQUMsQ0FBQTtBQWNELEdBQUcsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsVUFBTyxHQUE2QixFQUFFLEdBQXFCOzs7OztnQkFDcEYsS0FBSyxHQUFnQixHQUFHLENBQUMsSUFBSSxNQUF4QixDQUF3QjtnQkFHTyxxQkFBTSxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQzt3QkFDN0UsTUFBTSxFQUFFLG9CQUFvQixDQUFDLEtBQUssQ0FBQzt3QkFDbkMsUUFBUSxFQUFFLEtBQUs7cUJBQ2hCLENBQUMsRUFBQTs7Z0JBSEksYUFBYSxHQUF5QixTQUcxQztnQkFFRixHQUFHLENBQUMsSUFBSSxDQUFDO29CQUNQLFlBQVksRUFBRSxhQUFhLENBQUMsYUFBYTtpQkFDMUMsQ0FBQyxDQUFBOzs7O0tBQ0gsQ0FBQyxDQUFBO0FBRUYsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7SUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUE7QUFDckMsQ0FBQyxDQUFDLENBQUEifQ==